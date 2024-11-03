import { Route, Routes } from "react-router-dom";
import {lazy} from "react";

// Використання React.lazy для динамічного імпорту компонентів
const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage.jsx"));
const Layout = lazy(() => import("./components/Layout/Layout.jsx"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const InfoPage = lazy(() => import("./pages/InfoPage/InfoPage.jsx"));
const CreatePage = lazy(() => import("./pages/CreatePage/CreatePage.jsx"));
const EditPage = lazy(() => import("./pages/EditPage/EditPage.jsx"));

function App() {
	return (
			<Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="/home" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="info/:heroId" element={<InfoPage />} />
					<Route path="edit/:heroId" element={<EditPage />} />
					<Route path="create" element={<CreatePage />} />
					<Route path="*" element={<HomePage />} />
				</Route>
			</Routes>
	);
}

export default App;
