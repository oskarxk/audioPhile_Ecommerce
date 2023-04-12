import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Logo } from './Logo/Logo';

const DesktopMenu = () => {
	const colors = {
		theme: {
			orage: '#D87D4A',
			black: '#101010',
			grey: '#F1F1F1',
			lightGrey: '#FAFAFA',
			orangeHover: '#fbaf85',
			white: '#FFFFFF',
			moreBlack: '#000000',
		},
	};

	return (
		<nav className={`flex items-center justify-around bg-[#101010] py-6`}>
			<div>
				<Link to={'/'}>
					<Logo />
				</Link>
			</div>
			<div className='flex items-center justify-center space-x-8'>
				<Link to={'/'}>
					<a href='' className='text-white text-xl'>
						HOME
					</a>
				</Link>
				<Link to={'/speakers'}>
					<a href='' className='text-white text-xl'>
						SPEAKERS
					</a>
				</Link>
				<Link to={'/headphones'}>
					<a href='' className='text-white text-xl'>
						HEADPHONES
					</a>
				</Link>
				<Link to={'/earphones'}>
					<a href='' className='text-white text-xl'>
						EARPHONES
					</a>
				</Link>
			</div>
			<div>
				<AiOutlineShoppingCart className='text-white text-2xl' />
			</div>
		</nav>
	);
};

const MobileMenu = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleMenuClick = () => {
		setShowMenu(!showMenu);
	};

	return (
		<nav className={`flex items-center justify-around bg-[#101010] py-6`}>
			<div>
				<HiMenu className='text-white text-2xl' onClick={handleMenuClick} />
			</div>
			<div>
				<Logo />
			</div>
			<div>
				<AiOutlineShoppingCart className='text-white text-2xl' />
			</div>
			<div
				className={`absolute w-full left-0 top-16 bg-[#101010] z-10 ${
					showMenu ? 'block' : 'hidden'
				}`}
			>
				<div className='flex flex-col space-y-4 px-4 py-8'>
					<Link to={'/'}>
						<a href='' className='text-white' onClick={handleMenuClick}>
							HOME
						</a>
					</Link>
					<Link to={'/speakers'}>
						<a href='' className='text-white' onClick={handleMenuClick}>
							SPEAKERS
						</a>
					</Link>
					<Link to={'/headphones'}>
						<a href='' className='text-white' onClick={handleMenuClick}>
							HEADPHONES
						</a>
					</Link>
					<Link to={'/earphones'}>
						<a href='' className='text-white' onClick={handleMenuClick}>
							EARPHONES
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export const Navigation = () => {
	return (
		<>
			<div className='hidden sm:block'>
				<DesktopMenu />
			</div>

			<div className='block sm:hidden'>
				<MobileMenu />
			</div>
		</>
	);
};
