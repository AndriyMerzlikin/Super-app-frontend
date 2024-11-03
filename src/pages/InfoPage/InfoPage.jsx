import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants/urlConstants.js";

import {
	Catchphrase,
	Container,
	HeroImage,
	HeroInfoBlock,
	HeroName,
	InfoText,
	ButtonContainer,
	ActionButton,
	ImageGallery,
	GalleryImage,
} from "./InfoPage.styled.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const InfoPage = () => {
	const [loading, setLoading] = useState(false);

	const { heroId } = useParams();
	const [heroData, setHeroData] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchHeroData = async () => {
			setLoading(true);
			try {
				const res = await fetch(`${BASE_URL}/${heroId}`);
				const data = await res.json();
				setHeroData(data);
			} catch (e) {
				console.log(e.message);
			} finally {setLoading(false);}
		};
		fetchHeroData();
	}, [heroId]);

	const handleDelete = async () => {
		setLoading(true);
		try {
			await fetch(`${BASE_URL}/${heroId}`, { method: "DELETE" });
			toast.success("Hero deleted!");
			navigate("/home");
		} catch (error) {
			toast.error("Error deleting hero!");
			console.error("Error deleting hero:", error.message);
		} finally {setLoading(false);}
	};

	const handleEdit = () => {
		navigate(`/home/edit/${heroId}`);
	};

	if (!heroData) return <p>Loading...</p>;

	return (
		<Container>
			{loading && <Loader />}

			<HeroImage src={`http://localhost:3334/uploads/${heroData.images[0]}`} alt={heroData.nickname} />
			<HeroName>{heroData.nickname}</HeroName>
			<HeroInfoBlock>
				<InfoText><strong>Real Name:</strong> {heroData.real_name}</InfoText>
				<InfoText><strong>Origin:</strong> {heroData.origin_description}</InfoText>
				<InfoText><strong>Superpowers:</strong> {heroData.superpowers}</InfoText>
			</HeroInfoBlock>
			<Catchphrase>{heroData.catch_phrase}</Catchphrase>

			<h3>Image Gallery</h3>
			<ImageGallery>
				{heroData.images.map((image, index) => (
					<GalleryImage
						key={index}
						src={`http://localhost:3334/uploads/${image}`}
						alt={`Hero Image ${index + 1}`}
					/>
				))}
			</ImageGallery>

			<ButtonContainer>
				<ActionButton onClick={handleEdit}>Edit Hero</ActionButton>
				<ActionButton onClick={handleDelete}>Delete Hero</ActionButton>
			</ButtonContainer>
		</Container>
	);
};

export default InfoPage;
