import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Logo } from './Logo/Logo';

import { useDispatch } from 'react-redux';
import { uiActions } from '../store/CartVisibility';

import {
	HOME_ROUTE,
	SPEAKERS_ROUTE,
	HEADPHONES_ROUTE,
	EARPHONES_ROUTE,
} from './routes';

export const DesktopMenu = () => {
	const dispatch = useDispatch();
	const toggleCartHandler = useCallback(() => {
		dispatch(uiActions.toggle());
	}, [dispatch]);

	return (
		<nav className={`flex items-center justify-around bg-[#101010] py-6`}>
			<div>
				<Link to={HOME_ROUTE} aria-label='Home'>
					<Logo />
				</Link>
			</div>
			<div className='flex items-center justify-center space-x-8'>
				<Link to={HOME_ROUTE} aria-label='Home'>
					<p className='text-white text-xl'>HOME</p>
				</Link>
				<Link to={SPEAKERS_ROUTE} aria-label='SPEAKERS'>
					<p className='text-white text-xl'>SPEAKERS</p>
				</Link>
				<Link to={HEADPHONES_ROUTE} aria-label='HEADPHONES'>
					<p className='text-white text-xl'>HEADPHONES</p>
				</Link>
				<Link to={EARPHONES_ROUTE} aria-label='EARPHONES'>
					<p className='text-white text-xl'>EARPHONES</p>
				</Link>
			</div>
			<div onClick={toggleCartHandler} className='cursor-pointer'>
				<AiOutlineShoppingCart className='text-white text-2xl' />
			</div>
		</nav>
	);
};
