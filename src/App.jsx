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

export default function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<LandingPage />}
				/>
				<Route
					path='/about'
					element={
						<div className="min-h-screen flex items-center justify-center bg-gray-50">
							<div className="text-center">
								<h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
								<p className="text-gray-600">Coming Soon...</p>
							</div>
						</div>
					}
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
