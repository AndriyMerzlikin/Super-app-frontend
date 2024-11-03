import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #7e7a7a;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	margin-bottom: 15px;
	font-weight: bold;
`;

export const Input = styled.input`
	padding: 8px;
	margin-top: 5px;
	border: 1px solid #ddd;
	border-radius: 4px;
	width: 100%;
`;

export const TextArea = styled.textarea`
	padding: 8px;
	margin-top: 5px;
	border: 1px solid #ddd;
	border-radius: 4px;
	width: 100%;
	height: 80px;
	resize: vertical;
`;

export const Button = styled.button`
	padding: 10px;
	border: none;
	background-color: #007bff;
	color: white;
	font-weight: bold;
	cursor: pointer;
	border-radius: 4px;
	margin-top: 20px;

	&:hover {
		background-color: #0056b3;
	}
`;

export const ImageInput = styled.input`
    margin-bottom: 20px;
`;

export const ImagePreview = styled.img`
    max-width: 100%;
    max-height: 300px;
    border-radius: 4px;
    margin-top: 10px;
`;
