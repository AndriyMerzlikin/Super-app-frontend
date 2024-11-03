import styled from "styled-components";

export const Card = styled.li`
    width: 160px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #9f9d9d;
    text-align: center;
    margin: 16px 0;
    transition: transform 0.2s ease-in-out;
    flex: 0 0 auto;
    scroll-snap-align: center;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    @media (min-width: 768px) {
        width: 180px;
    }
    @media (min-width: 1024px) {
        width: 200px;
    }
`;

export const HeroImage = styled.img`
    width: 200px;   
    height: 340px;  
    object-fit: cover; 
`;

export const Nickname = styled.h2`
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    margin: 12px 0;

    @media (min-width: 768px) {
        font-size: 1.1rem;
    }
    @media (min-width: 1024px) {
        font-size: 1.2rem;
    }
`;
