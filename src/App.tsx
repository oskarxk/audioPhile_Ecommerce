import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from 'components/Navigation/Navigation';
import { Home } from 'components/Home/Home';
import { Footer } from 'components/Footer/Footer';
import { CategoryPage } from 'components/Category/CategoryPage';
import { ProductCard } from 'components/Product/ProductCard';
import { PaymentFinalization } from 'components/PaymentFinalization/PaymentFinalization';
import { AdminLogin } from 'components/AdminPanel/AdminLogin';

import { Orders } from 'components/AdminPanel/Orders';
import { QuestionChat } from 'components/AdminPanel/QuestionChat';
import AdminPrivateRoutes from 'components/AdminPanel/AdminPrivateRoutes';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:categoryName' element={<CategoryPage />} />
				<Route path='/:categoryName/:productName' element={<ProductCard />} />
				<Route path='/payment' element={<PaymentFinalization />} />
				<Route element={<AdminPrivateRoutes />}>
					<Route element={<Orders />} path='/orders' />
					<Route element={<QuestionChat />} path='/questionchat' />
				</Route>
				<Route path='/adminLogin' element={<AdminLogin />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
