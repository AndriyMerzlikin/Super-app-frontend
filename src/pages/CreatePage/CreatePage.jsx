import {
	Container,
	Form,
	FormGroup,
	Label,
	Input,
	TextArea,
	SubmitButton,
	ImagePreview,
	ImageInput,
	Title
} from "./CreatePage.styled";
import { useState } from "react";
import { BASE_URL } from "../../constants/urlConstants.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader.jsx";

const CreatePage = () => {
	const [nickname, setNickname] = useState("");
	const [real_name, setReal_name] = useState("");
	const [origin_description, setOrigin_description] = useState("");
	const [superpowers, setSuperpowers] = useState("");
	const [catch_phrase, setCatch_phrase] = useState("");
	const [imageFile, setImageFile] = useState(null);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImageFile(file);
		}
	};

	const createHero = async (heroData) => {
		const formData = new FormData();
		formData.append("nickname", heroData.nickname);
		formData.append("real_name", heroData.real_name);
		formData.append("origin_description", heroData.origin_description);
		formData.append("superpowers", heroData.superpowers);
		formData.append("catch_phrase", heroData.catch_phrase);
		if (imageFile) {
			formData.append("images", imageFile);
		}

		setLoading(true);

		try {
			const response = await fetch(BASE_URL, {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				await response.json();
				toast.success("Hero created successfully!");
				navigate("/home");
				setNickname("");
				setReal_name("");
				setOrigin_description("");
				setSuperpowers("");
				setCatch_phrase("");
				setImageFile(null);
			} else {
				console.error("Error creating hero!");
				toast.error("Error creating hero!");
			}
		} catch (error) {
			console.error(error);
			toast.error("An error occurred!");
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newHero = { nickname, real_name, origin_description, superpowers, catch_phrase };
		createHero(newHero);
	};

	return (
		<Container>
			{loading && <Loader />}
			<Title>Create new hero</Title>
			<Form onSubmit={handleSubmit} encType="multipart/form-data">
				<FormGroup>
					<Label>Nickname</Label>
					<Input
						type="text"
						value={nickname}
						onChange={(e) => setNickname(e.target.value)}
						required
					/>
				</FormGroup>

				<FormGroup>
					<Label>Real name</Label>
					<Input
						type="text"
						value={real_name}
						onChange={(e) => setReal_name(e.target.value)}
						required
					/>
				</FormGroup>

				<FormGroup>
					<Label>Origin description</Label>
					<TextArea
						value={origin_description}
						onChange={(e) => setOrigin_description(e.target.value)}
						required
					/>
				</FormGroup>

				<FormGroup>
					<Label>Superpowers</Label>
					<TextArea
						value={superpowers}
						onChange={(e) => setSuperpowers(e.target.value)}
						required
					/>
				</FormGroup>

				<FormGroup>
					<Label>Catch phrase</Label>
					<Input
						type="text"
						value={catch_phrase}
						onChange={(e) => setCatch_phrase(e.target.value)}
						required
					/>
				</FormGroup>

				<FormGroup>
					<Label>Image</Label>
					<ImageInput type="file" accept="image/*" onChange={handleImageUpload} />
					{imageFile && <ImagePreview src={URL.createObjectURL(imageFile)} alt="hero image" />}
				</FormGroup>

				<SubmitButton type="submit">Create Hero</SubmitButton>
			</Form>
		</Container>
	);
};

export default CreatePage;
