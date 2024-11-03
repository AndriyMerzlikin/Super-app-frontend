import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urlConstants.js";
import {ITEMS_PER_PAGE} from "../../constants/commonConstants.js";
import HeroCard from "../../components/HeroCard/HeroCard.jsx";
import {ListContainer, SliderContainer, SliderButton, DotsContainer, Dot} from "./HomePage.styled.jsx";
import {useNavigate} from "react-router-dom";
import {useSearch} from "../../context/SearchContext.jsx";
import Loader from "../../components/Loader/Loader.jsx";


const HomePage = () => {
	const [heroesData, setHeroesData] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate();

	const { searchTerm, setSearchTerm  } = useSearch();

	useEffect(() => {
		const fetchHeroesData = async () => {
			setLoading(true)
			try {
				const res = await fetch(BASE_URL);
				const data = await res.json();
				setHeroesData(data);
			} catch (e) {
				console.log(e.message);
			} finally {
				setLoading(false)
			}
		};
		fetchHeroesData();
	}, []);

	useEffect(() => {
		return () => {
			setSearchTerm("");
		};
	}, [setSearchTerm]);

	const filteredHeroes = heroesData.filter((hero) =>
		hero.nickname.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleCardClick = (heroId) => {
		navigate(`/home/info/${heroId}`);
	};

	const totalPages = Math.ceil(filteredHeroes.length / ITEMS_PER_PAGE);
	const handleNext = () => {
		setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
	};
	const handlePrev = () => {
		setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
	};

	const displayedHeroes = filteredHeroes.slice(
		currentPage * ITEMS_PER_PAGE,
		(currentPage + 1) * ITEMS_PER_PAGE
	);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<SliderContainer>
					<SliderButton onClick={handlePrev}>&lt;</SliderButton>
					<ListContainer>
						{displayedHeroes.map((hero) => (
							<HeroCard key={hero._id} hero={hero} onClick={() => handleCardClick(hero._id)} />
						))}
					</ListContainer>
					<SliderButton onClick={handleNext}>&gt;</SliderButton>
				</SliderContainer>
			)}

	<DotsContainer>
		{Array.from({ length: totalPages }).map((_, index) => (
			<Dot
				key={index}
				$isActive={index === currentPage}
				onClick={() => setCurrentPage(index)}
			/>
		))}
	</DotsContainer>
		</>
	);
};

export default HomePage;
