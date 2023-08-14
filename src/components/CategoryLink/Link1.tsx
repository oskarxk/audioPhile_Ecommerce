import React from 'react';

import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { HEADPHONES_ROUTE } from '../Navigation/routes';

const itemHeadphones = require('../../Assets/home/cart/image-removebg-headphones.png');

export const Link1 = () => {
	return (
		<div className='h-36 w-3/4 lg:w-1/5 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl'>
			<img
				className='absolute left-1/2 transform -translate-x-1/2 -translate-y-24'
				src={itemHeadphones}
				alt='headphones'
			/>
			<h2 className='text-[#101010] font-bold tracking-wider	'>HEADPHONES</h2>
			<div className='flex flex-row items-center'>
				<Link className='py-4' to={HEADPHONES_ROUTE}>
					<p className=' text-[#808080] font-bold'>SHOP</p>
				</Link>
				<AiOutlineRight className=' text-[#D87D4A] font-bold' />
			</div>
		</div>
	);
};
