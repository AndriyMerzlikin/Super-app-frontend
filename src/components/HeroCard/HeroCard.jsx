/* eslint-disable react/prop-types */
import {Card, HeroImage, Nickname} from "./HeroCard.styled.jsx";
import defaultImage from "../../assets/default-picture.jpg"
import {IMAGES_URL} from "../../constants/urlConstants.js";


const HeroCard = ({hero: {nickname, _id, images}, onClick}) => {

	const imageUrl = images && images.length > 0 ? `${IMAGES_URL}/${images[0]}` : defaultImage;

	return (
		<Card onClick={()=>onClick(_id)}>
			<HeroImage src={imageUrl} alt={nickname} />
			<Nickname>{nickname}</Nickname>
		</Card>
	);
};

export default HeroCard;