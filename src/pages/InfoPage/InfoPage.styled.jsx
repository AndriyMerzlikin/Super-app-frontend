import styled from "styled-components";

export const Container = styled.div`
`;

export const HeroImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: top; 
    border-radius: 50%;
    margin-bottom: 1rem;
`;

export const HeroName = styled.h1`
`;

export const HeroInfoBlock = styled.div`
    margin: 1rem 0;
`;

export const InfoText = styled.p`
    margin: 0.5rem 0;
`;

export const Catchphrase = styled.p`
    font-style: italic;
    margin-top: 1rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 1rem;
`;

export const ActionButton = styled.button`
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: #45a049;
    }

    &:nth-child(2) {
        background-color: #f44336;
    }

    &:nth-child(2):hover {
        background-color: #d32f2f;
    }
`;

export const ImageGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
`;

export const GalleryImage = styled.img`
    width: 150px;  
    height: auto;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        transition: transform 0.2s;
    }
`;