import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { HeadPhones } from './components/HeadPhones/HeadPhones';
import { Speakers } from './components/Speakers/Speakers';
import { Earphones } from './components/Earphones/Earphones';
import { ProductCard } from './components/Products/ProductCard';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/headphones' element={<HeadPhones />} />
				<Route path='/headphones/:id' element={<ProductCard />} />
				<Route path='/speakers' element={<Speakers />} />
				<Route path='/speakers/:id' element={<ProductCard />} />
				<Route path='/earphones' element={<Earphones />} />
				<Route path='/earphones/:id' element={<ProductCard />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
