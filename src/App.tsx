import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import sanityClient from './client';
import { Navigation } from './components/Navigation/Navigation';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { HeadPhones } from './components/HeadPhones/HeadPhones';
import { Speakers } from './components/Speakers/Speakers';
import { Earphones } from './components/Earphones/Earphones';
import { Zx9Product } from './components/Products/Zx9Product';
import { Zx7Product } from './components/Products/Zx7Product';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/headphones' element={<HeadPhones />} />
				<Route path='/speakers' element={<Speakers />} />
				<Route path='/speakers/:id' element={<Zx9Product />} /> 
				{/* Zx9Product zmien nazwe na ProductCard i wszystkie dane maja przychodzic z sanity */}
				<Route path='/earphones' element={<Earphones />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
