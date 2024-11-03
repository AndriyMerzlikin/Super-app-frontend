import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import {MainContainer} from "./Layout.styled.js";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Suspense} from "react";
import Loader from "../Loader/Loader.jsx";

const Layout = () => {
	return (
		<>
			<Header/>
			<Suspense fallback={<Loader />}>
				<MainContainer>
					<Outlet/>
				</MainContainer>
			</Suspense>
			<ToastContainer position="top-right" autoClose={3000}/>
		</>
	);
};

export default Layout;
