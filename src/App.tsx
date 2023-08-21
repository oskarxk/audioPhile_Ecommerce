import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from 'components/Home/Home';
import { CategoryPage } from 'components/Category/CategoryPage';
import { ProductCard } from 'components/Product/ProductCard';
import { PaymentFinalization } from 'components/PaymentFinalization/PaymentFinalization';
import { AdminLogin } from 'components/AdminPanel/AdminLogin';

import { Orders } from 'components/AdminPanel/Orders';
import { OnlineChats } from 'components/AdminPanel/OnlineChats';
import { ResolvedChats } from 'components/AdminPanel/ResolvedChats';
import { NotFoundPage } from 'components/NotFundPage/NotFoundPage';
import AdminPrivateRoutes from 'components/AdminPanel/AdminPrivateRoutes';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/payment' element={<PaymentFinalization />} />
				<Route element={<AdminPrivateRoutes />}>
					<Route element={<OnlineChats />} path='/onlineChats' />
					<Route element={<ResolvedChats />} path='/resolvedChats' />
					<Route element={<Orders />} path='/orders' />
				</Route>
				<Route element={<AdminLogin />} path='/adminLogin' />
				<Route path='/:categoryName/:productName' element={<ProductCard />} />
				<Route path='/:categoryName' element={<CategoryPage />} />
				<Route element={<NotFoundPage />} path='*' />
			</Routes>
		</div>
	);
}

export default App
