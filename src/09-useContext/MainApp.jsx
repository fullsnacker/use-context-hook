import { Navigate, Route, Routes, Link } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const MainApp = () => {
	return (
		<>
			<NavBar />
			<hr />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="login" element={<LoginPage />} />

				{/* O puedo enviarlo a 404 */}
				<Route path="/*" element={<Navigate to="about" />} />
			</Routes>
		</>
	);
};
