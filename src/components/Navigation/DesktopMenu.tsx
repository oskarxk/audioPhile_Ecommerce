import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Logo } from './Logo/Logo';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/CartVisibility';
import { Cart } from '../Cart/Cart';

export const DesktopMenu = () => {
	const dispatch = useDispatch();
	const toggleCartHandler = () => {
		dispatch(uiActions.toggle());
	};

	const showCart = useSelector((state: any) => state.ui.cartIsVisible);

	return (
		<nav className={`flex items-center justify-around bg-[#101010] py-6`}>
			<div>
				<Link to={'/'}>
					<Logo />
				</Link>
			</div>
			<div className='flex items-center justify-center space-x-8'>
				<Link to={'/'}>
					<p className='text-white text-xl'>HOME</p>
				</Link>
				<Link to={'/speakers'}>
					<p className='text-white text-xl'>SPEAKERS</p>
				</Link>
				<Link to={'/headphones'}>
					<p className='text-white text-xl'>HEADPHONES</p>
				</Link>
				<Link to={'/earphones'}>
					<p className='text-white text-xl'>EARPHONES</p>
				</Link>
			</div>
			<div onClick={toggleCartHandler} className='cursor-pointer'>
				<AiOutlineShoppingCart className='text-white text-2xl' />
			</div>
			{showCart && <Cart />}
		</nav>
	);
};
