import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex; 
    align-items: center; 
    background-color: #ff3300; 
    color: white; 
    border: none; 
    border-radius: 10px; 
    padding: 5px 10px; 
    font-size: 16px; 
    line-height: 1.2; 
    cursor: pointer; 
    transition: background-color 0.3s ease, transform 0.3s ease; 

    &:hover {
        background-color: #ffcc00; 
        transform: scale(1.05); 
    }

    &:active {
        transform: scale(0.95); 
    }

    /* Стилізуємо іконку в кнопці */
    & svg {
        margin-right: 5px; /* Відстань між іконкою і текстом */
        height: 20px; /* Висота іконки */
        width: 20px; /* Ширина іконки */
    }
`