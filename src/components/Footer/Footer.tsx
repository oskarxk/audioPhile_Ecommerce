import React from 'react';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { Logo } from '../Navigation/Logo/Logo';

export const Footer = () => {
	function getCurrentYear(): number {
		return new Date().getFullYear();
	}

	const date = getCurrentYear();

	return (
		<div className='w-full  flex flex-col items-center justify-around bg-[#101010]'>
			<div className='w-1/4 h-1 bg-[#D87D4A]'></div>
			<div className='mt-6'>
				<Logo />
			</div>
			<div className='flex flex-col space-y-4 px-4 py-8'>
				<a href='#' className='text-[#FAFAFA] font-bold'>
					HOME
				</a>
				<a href='#' className='text-[#FAFAFA] font-bold'>
					SPEAKERS
				</a>
				<a href='#' className='text-[#FAFAFA] font-bold'>
					HEADPHONES
				</a>
				<a href='#' className='text-[#FAFAFA] font-bold'>
					EARPHONES
				</a>
			</div>
			<p className='text-[#FAFAFA] mx-7'>
				Audiophile is an all in one stop to fulfill your audio needs. We're a
				small team of music lovers and sound specialists who are devoted to
				helping you get the most out of personal audio. Come and visit our demo
				facility - we're open 7 days a week.
			</p>
			<p className='text-[#FAFAFA] my-6'>
				Copyright <span>{date}</span>. All Rights Reserved
			</p>
			<div className='w-1/3 mb-8 flex justify-between'>
				<AiFillFacebook className='text-[#FAFAFA] text-3xl' />
				<AiOutlineTwitter className='text-[#FAFAFA] text-3xl' />
				<BsInstagram className='text-[#FAFAFA] text-3xl' />
			</div>
		</div>
	);
};
