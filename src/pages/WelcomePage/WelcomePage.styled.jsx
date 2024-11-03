import styled, { keyframes } from "styled-components";

const popIn = keyframes`
    0% {
        transform: scale(0);
        opacity: 0;
    }
    60% {
        transform: scale(1.3);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const AnimatedLetter = styled.span`
    display: inline-block;
    font-size: 100px;
    font-weight: bold;
    color: ${({ color }) => color};
    opacity: 0;
    animation: ${popIn} 0.8s ease forwards;
    animation-delay: ${({ $delay }) => $delay}s;
    animation-fill-mode: forwards;
`;

export const ContinueButton = styled.button`
    margin-top: 40px;
    padding: 10px 20px;
    font-size: 24px;
    cursor: pointer;
    border: none;
    background-color: #333;
    color: white;
    border-radius: 5px;
    opacity: 0;
    animation: ${({ $isVisible }) => ($isVisible ? fadeIn : "none")} 1s ease forwards;
    transition: background-color 0.3s;

    &:hover {
        background-color: #555;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px; 
    background-color: ${props => props.theme.colors.mainBg};
    box-sizing: border-box; 
`;