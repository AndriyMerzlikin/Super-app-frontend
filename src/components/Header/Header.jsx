import {
	BtnText,
	Container,
	LogoImage,
	LogoTitle,
	LogoWrapper,
	SearchContainer,
	SearchIcon,
	SearchInput
} from "./Header.styled.js";
import SuperLogo from "../../assets/super-logo.png";
import {BsSearch} from "react-icons/bs";
import {IoPersonAdd} from "react-icons/io5";
import {FaArrowLeft} from "react-icons/fa6";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../Button/Button.jsx";
import {useSearch} from "../../context/SearchContext.jsx";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const {searchTerm, setSearchTerm} = useSearch();

	const isHomePage = location.pathname === "/home";

	const handleButtonClick = () => {
		if (isHomePage) {
			navigate("/home/create");
		} else {
			navigate("/home");
		}
	};

	return (
		<Container>
			<LogoWrapper to={"/home"}>
				<LogoImage src={SuperLogo} alt={"logo"}/>
				<LogoTitle>UPER APP</LogoTitle>
			</LogoWrapper>

			{isHomePage && (<SearchContainer>
				<SearchIcon>
					<BsSearch/>
				</SearchIcon>
				<SearchInput
					type="text"
					placeholder="Search heroes..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}/>
			</SearchContainer>)}

			<Button onClick={handleButtonClick} isBack={!isHomePage}>
				{isHomePage ? (
					<>
						<IoPersonAdd/>
						<BtnText>Create new Hero</BtnText>
					</>
				) : (
					<>
						<FaArrowLeft/>
						<BtnText>Back</BtnText>
					</>
				)}
			</Button>
		</Container>
	);
};

export default Header;
