import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { CategoryPage } from './components/Category/CategoryPage';
import { ProductCard } from './components/Products/ProductCard';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:categoryid' element={<CategoryPage />} />
				<Route path='/:categoryid/:id' element={<ProductCard />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
