import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import {AnimatedLetter, ContinueButton, TextContainer} from "./WelcomePage.styled.jsx";
import {theme} from "../../theme.js";
import {WELCOME_TEXT} from "../../constants/titleConstants.js";

const WelcomePage = () => {
	const [isTextComplete, setIsTextComplete] = useState(false);

	const navigate = useNavigate()

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsTextComplete(true);
		}, WELCOME_TEXT.length * 500);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<TextContainer>
			<h1>
				{WELCOME_TEXT.split("").map((letter, index) => (
					<AnimatedLetter
						key={index}
						color={theme.rainbowColors[index % theme.rainbowColors.length]}
						$delay={index * 0.3}
					>
						{letter}
					</AnimatedLetter>
				))}
			</h1>

			<ContinueButton $isVisible={isTextComplete} onClick={() =>
				navigate("/home")}>
				Press to continue
			</ContinueButton>
		</TextContainer>
	);
};

export default WelcomePage;