import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import './App.css';
import { Toaster } from 'sonner';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route
					path='/'
					element={<LandingPage />}
				/>
				<Route
					path='/about'
					element={<AboutPage />}
				/>
				<Route
					path='/contact'
					element={<ContactPage />}
				/>
				<Route
					path='*'
					element={<Navigate to='/' />}
				/>
			</Routes>
			<Toaster
				position='top-center'
				richColors
			/>
		</Router>
	);
}
