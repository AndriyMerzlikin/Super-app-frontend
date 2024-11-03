import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants/urlConstants.js";
import {
	Container,
	Form,
	Input,
	Label,
	TextArea,
	Button,
	ImageInput,
	ImagePreview
} from "./EditPage.styled.js";
import Loader from "../../components/Loader/Loader.jsx";

const EditPage = () => {
	const { heroId } = useParams();
	const navigate = useNavigate();
	const [heroData, setHeroData] = useState({
		nickname: "",
		real_name: "",
		origin_description: "",
		superpowers: "",
		catch_phrase: "",
		images: []
	});
	const [newImage, setNewImage] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchHeroData = async () => {
			setLoading(true);
			try {
				const res = await fetch(`${BASE_URL}/${heroId}`);
				const data = await res.json();
				setHeroData(data);
			} catch (e) {
				toast.error("Failed to load hero data");
				console.error("Error loading hero:", e.message);
			} finally {
				setLoading(false);
			}
		};
		fetchHeroData();
	}, [heroId]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setHeroData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => setNewImage(reader.result);
			reader.readAsDataURL(file);
			setHeroData((prevData) => ({
				...prevData,
				images: [file]
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();

		Object.keys(heroData).forEach((key) => {
			if (key === "images" && heroData.images[0]) {
				formData.append("images", heroData.images[0]);
			} else {
				formData.append(key, heroData[key]);
			}
		});

		setLoading(true);
		try {
			const res = await fetch(`${BASE_URL}/${heroId}`, {
				method: "PUT",
				body: formData,
			});

			if (res.ok) {
				toast.success("Hero updated successfully!");
				navigate(`/home/info/${heroId}`);
			} else {
				toast.error("Failed to update hero");
			}
		} catch (error) {
			toast.error("Error updating hero");
			console.error("Error updating hero:", error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Container>
			{loading && <Loader />}

			<h2>Edit Hero</h2>
			<Form onSubmit={handleSubmit}>
				<Label>
					Nickname:
					<Input
						type="text"
						name="nickname"
						value={heroData.nickname}
						onChange={handleChange}
					/>
				</Label>
				<Label>
					Real Name:
					<Input
						type="text"
						name="real_name"
						value={heroData.real_name}
						onChange={handleChange}
					/>
				</Label>
				<Label>
					Origin Description:
					<TextArea
						name="origin_description"
						value={heroData.origin_description}
						onChange={handleChange}
					/>
				</Label>
				<Label>
					Superpowers:
					<TextArea
						name="superpowers"
						value={heroData.superpowers}
						onChange={handleChange}
					/>
				</Label>
				<Label>
					Catchphrase:
					<TextArea
						name="catch_phrase"
						value={heroData.catch_phrase}
						onChange={handleChange}
					/>
				</Label>

				<Label>
					Image:
					<ImageInput type="file" accept="image/*" onChange={handleImageUpload} />
					{newImage ? (
						<ImagePreview src={newImage} alt="new hero image" />
					) : (
						<ImagePreview
							src={`http://localhost:3334/uploads/${heroData.images[0]}`}
							alt="current hero image"
						/>
					)}
				</Label>

				<Button type="submit">Save Changes</Button>
			</Form>
		</Container>
	);
};

export default EditPage;
