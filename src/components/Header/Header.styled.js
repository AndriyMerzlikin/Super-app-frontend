import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.header`
    position: fixed;
    z-index: 11;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    padding: 0 20px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.5); 
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Напівпрозорість і блюр */
    background: rgba(57, 55, 55, 0.8); 
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px); 
`;


export const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
	text-decoration: none;
`;

export const LogoImage = styled.img`
    height: 50px; /* Висота логотипа */
	margin-right: -22px;
	padding: 0;
`;

export const LogoTitle = styled.p`
    font-size: 20px; 
    font-weight: bold; 
    background: linear-gradient(90deg, #ffcc00, #ff3300); 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); 
`;

export const SearchContainer = styled.div`
    position: relative;
    width: 300px; 
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 10px 15px 10px 40px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 25px;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
        border-color: #ff3300;
        box-shadow: 0 0 5px rgba(255, 51, 0, 0.5);
    }

    &::placeholder {
        color: #aaa;
        font-style: italic;
    }

    &:hover {
        border-color: #ffcc00;
    }
`;

export const SearchIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #aaa; 
    font-size: 20px; 
    pointer-events: none; 
`;

export const BtnText = styled.p`
display: inline-block;
line-height: 0.2;
text-align: center;`