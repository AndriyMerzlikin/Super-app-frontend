/* eslint-disable react/prop-types */

import {StyledButton} from "./Button.styled.js";

const Button = ({onClick, children}) => {
	return (
		<StyledButton onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default Button;