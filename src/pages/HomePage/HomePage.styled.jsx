import styled from "styled-components";

export const SliderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 0 10px;
`;

export const ListContainer = styled.ul`
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
    gap: 16px;
    padding: 0;
    margin: 0;
    list-style: none;
    justify-content: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
	
    @media (min-width: 768px) {
        gap: 20px;
    }
    @media (min-width: 1024px) {
        gap: 24px;
    }
`;

export const SliderButton = styled.button`
    background-color: inherit;
    color: #afacac;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
    transition: background-color 0.4s;
    z-index: 1;

    &:hover {
        background-color: #6c6d70;
    }

    @media (min-width: 768px) {
        width: 50px;
        height: 50px;
        font-size: 22px;
    }
    @media (min-width: 1024px) {
        width: 60px;
        height: 60px;
        font-size: 24px;
    }
`;

export const DotsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	gap: 8px;
	width: 100%;
`;

export const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({$isActive}) => ($isActive ? "#504f4f" : "#ccc")};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #504f4f;
    }
`;
