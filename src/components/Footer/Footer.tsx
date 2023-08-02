import React from 'react';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { Logo } from '../Navigation/Logo/Logo';
import { Link } from 'react-router-dom';
import {
	EARPHONES_ROUTE,
	HEADPHONES_ROUTE,
	HOME_ROUTE,
	SPEAKERS_ROUTE,
} from 'components/Navigation/routes';

export const Footer = () => {
	function getCurrentYear(): number {
		return new Date().getFullYear();
	}

	const date = getCurrentYear();

	return (
		<div className='w-full  flex flex-col items-center lg:items-start justify-around bg-[#101010]'>
			<div className='w-1/6 h-1 bg-[#D87D4A] lg:ml-20'></div>
			<div className='flex justify-center items-center w-full mt-6 lg:justify-start lg:pl-20'>
				<Logo />
			</div>
			<div className='lg:ml-20'>
				<div className='flex flex-col w-full lg:flex-row lg:justify-around py-8'>
					<Link
						to={HOME_ROUTE}
						className='text-[#FAFAFA] font-bold py-2 lg:pr-8'
					>
						HOME
					</Link>
					<Link
						to={SPEAKERS_ROUTE}
						className='text-[#FAFAFA] font-bold py-2 lg:pr-8'
					>
						SPEAKERS
					</Link>
					<Link
						to={HEADPHONES_ROUTE}
						className='text-[#FAFAFA] font-bold py-2 lg:pr-8'
					>
						HEADPHONES
					</Link>
					<Link
						to={EARPHONES_ROUTE}
						className='text-[#FAFAFA] font-bold py-2 lg:pr-8'
					>
						EARPHONES
					</Link>
				</div>
			</div>
			<p className='text-[#FAFAFA] mx-7 lg:mx-0 lg:pl-20 lg:w-3/4 lg:text-left'>
				Audiophile is an all in one stop to fulfill your audio needs. We're a
				small team of music lovers and sound specialists who are devoted to
				helping you get the most out of personal audio. Come and visit our demo
				facility - we're open 7 days a week.
			</p>
			<div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full'>
				<p className='text-[#FAFAFA] my-6 lg:pl-20 lg:text-left'>
					Copyright <span>{date}</span>. All Rights Reserved
				</p>
				<div className='mb-8 lg:mb-0 lg:mr-20 flex justify-between'>
					<Link to={'https://www.facebook.com/'} target='blank'>
						<AiFillFacebook className='text-[#FAFAFA] text-3xl mx-4' />
					</Link>
					<Link to={'https://twitter.com/'} target='blank'>
						<AiOutlineTwitter className='text-[#FAFAFA] text-3xl mx-4' />
					</Link>
					<Link to={'https://www.instagram.com/'} target='blank'>
						<BsInstagram className='text-[#FAFAFA] text-3xl mx-4' />
					</Link>
				</div>
			</div>
		</div>
	);
};
