import React, { useEffect, useState } from 'react';
import sanityClient from '../../client';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const ZX9 = require('../../Assets/products/product-zx9-speaker/mobile/image-category-page-preview.jpg');
const ZX9Desktop = require('../../Assets/products/product-zx9-speaker/desktop/image-category-page-preview.jpg');
const ZX7 = require('../../Assets/products//product-zx7-speaker/mobile/image-category-page-preview.jpg');
const ZX7Desktop = require('../../Assets/products//product-zx7-speaker/desktop/image-category-page-preview.jpg');

const itemHeadphones = require('../../Assets/home/cart/image-removebg-headphones.png');
const itemSpeakers = require('../../Assets/home/cart/image-removebg-speaker.png');
const itemSpeakersMobile = require('../../Assets/home/cart/image-removebg-speaker.png');
const itemEarphones = require('../../Assets/home/cart/image-removebg-earphones.png');
const photoMan = require('../../Assets/home/mobile/image-best-gear.jpg');

type Props = {};

type Product = {
	_id: number;
	name: string;
	price: number;
	description: string;
	imageDesktop: string;
	imageMobile: string;
	category: {
		name: string;
	};
};

const SpeakersDesktop = (props: Props) => {
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
		<div className='flex flex-col w-full mb-4'>
			<div className={`flex items-center justify-center bg-[#101010] py-6`}>
				<p className='text-[#FFFFFF] font-bold text-4xl tracking-widest'>
					SPEAKERS
				</p>
			</div>
			<div className='flex justify-around items-center my-8'>
				<div className='w-2/5 flex justify-center items-center rounded-xl pt-8'>
					<img src={ZX9Desktop} alt='speakers' className='mt-2 rounded-xl' />
				</div>
				<div className='flex flex-col justify-center items-start w-2/5'>
					<p className='py-4  text-[#fbaf85] text-xl tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-4xl font-bold pb-4'>ZX9 SPEAKER</p>
					<p className='text-[#808080] text-sm text-left w-1/2'>
						Upgrade your sound system with the all new ZX9 active speaker. It's
						a bookshelf speaker system that offers truly wireless connectivity
						-- creating new possibilities for more pleasing and practical audio
						setups.
					</p>
					<Link className='py-4' to={'zx9'}>
						<button className='my-2 py-2 px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
							SEE PRODUCT
						</button>
					</Link>
				</div>
			</div>

			<div className='flex justify-around items-center my-8'>
				<div className='flex flex-col justify-center items-start w-2/5'>
					<p className='py-4  text-[#fbaf85] text-xl tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-4xl font-bold pb-4'>ZX7 SPEAKER</p>
					<p className='text-[#808080] text-sm text-left w-1/2'>
						Stream high quality sound wirelessly with minimal loss. The ZX7
						bookshelf speaker uses high-end audiophile components that
						represents the top of the line powered speakers for home or studio
						use.
					</p>
					<Link className='py-4' to={'zx7'}>
						<button className='py-2 px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
							SEE PRODUCT
						</button>
					</Link>
				</div>
				<div className='w-2/5 flex justify-center items-center rounded-xl pt-8'>
					<img src={ZX7Desktop} alt='speakers' className='mt-2 rounded-xl' />
				</div>
			</div>

			<div className='flex justify-evenly items-center my-8'>
				<div className='h-36 w-1/5 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl'>
					<img
						className='absolute left-1/2 transform -translate-x-1/2 -translate-y-24'
						src={itemHeadphones}
						alt='headphones'
					/>
					<p className='text-[#101010] font-bold tracking-wider	'>HEADPHONES</p>
					<div className='flex flex-row items-center'>
						<Link className='py-4' to={'/headphones'}>
							<a href='' className=' text-[#808080] font-bold'>
								SHOP
							</a>
						</Link>
						<AiOutlineRight className=' text-[#D87D4A] font-bold' />
					</div>
				</div>
				<div className='h-36 w-1/5 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl'>
					<img
						className='absolute left-1/2 transform -translate-x-1/2 -translate-y-24'
						src={itemSpeakersMobile}
						alt='speakers'
					/>
					<p className='text-[#101010] font-bold tracking-wider	'>SPEAKERS</p>
					<div className='flex flex-row items-center'>
						<Link className='py-4' to={'/speakers'}>
							<a href='' className=' text-[#808080] font-bold'>
								SHOP
							</a>
						</Link>
						<AiOutlineRight className=' text-[#D87D4A] font-bold' />
					</div>
				</div>
				<div className='h-36 w-1/5 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl'>
					<img
						className='absolute left-1/2 transform -translate-x-1/2 -translate-y-24'
						src={itemEarphones}
						alt='earphones'
					/>
					<p className='text-[#101010] font-bold tracking-wider	'>EARPHONES</p>
					<div className='flex flex-row items-center'>
						<Link className='py-4' to={'/earphones'}>
							<a href='' className=' text-[#808080] font-bold'>
								SHOP
							</a>
						</Link>
						<AiOutlineRight className=' text-[#D87D4A] font-bold' />
					</div>
				</div>
			</div>
			<div className='flex justify-around'>
				<div className='w-2/5 flex flex-col justify-center items-center'>
					<p className='text-3xl font-bold my-6 text-[#101010] tracking-normal text-left pr-4'>
						BRINGING YOU THE
						<span className='text-3xl font-bold text-[#fbaf85] tracking-normal'>
							{' '}
							BEST{' '}
						</span>
						AUDIO GEAR
					</p>
					<p className=' mb-8 text-[#808080] text-lg text-left'>
						Located at the heart of New York City, Audiophile is the premier
						store for high end headphones, earphones, speakers, and audio
						accessories. We have a large showroom and luxury demonstration rooms
						available for you to browse and experience a wide range of our
						products. Stop by our store to meet some of the fantastic people who
						make Audiophile the best place to buy your portable audio equipment.
					</p>
				</div>
				<div className=' w-2/5 my-8 flex flex-col justify-center items-center'>
					<img src={photoMan} alt='Man' className='rounded-xl' />
				</div>
			</div>
		</div>
	);
};

const SpeakersMobile = (props: Props) => {
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
		<div className='flex flex-col w-full mb-4'>
			<div className={`flex items-center justify-center bg-[#101010] py-6`}>
				<p className='text-[#FFFFFF] font-bold text-2xl tracking-widest'>
					SPEAKERS
				</p>
			</div>
			<div className='flex flex-col justify-between items-center my-32'>
				<div className='h-96 w-3/4 flex flex-col justify-center items-center rounded-xl pt-8'>
					<img src={ZX9} alt='speakers' className='mt-2 rounded-xl' />
					<p className=' px-2 py-4  text-[#fbaf85] tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-2xl font-bold pb-4 px-20'>
						ZX9 SPEAKER
					</p>
					<p className='text-[#808080] text-sm'>
						Upgrade your sound system with the all new ZX9 active speaker. It's
						a bookshelf speaker system that offers truly wireless connectivity
						-- creating new possibilities for more pleasing and practical audio
						setups.
					</p>
					<Link className='h-25 w-1/2 my-4 py-2' to={'zx9'}>
						<button className='py-2 w-full bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
							SEE PRODUCT
						</button>
					</Link>
				</div>
			</div>
			<div className='flex flex-col justify-between items-center my-32'>
				<div className='h-96 w-3/4 flex flex-col justify-center items-center rounded-xl'>
					<img src={ZX7} alt='speakers' className='mt-4 rounded-xl' />
					<p className=' px-2 py-4  text-[#fbaf85] tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-2xl font-bold pb-4 px-20'>
						ZX7 SPEAKER
					</p>
					<p className='text-[#808080] text-sm'>
						Stream high quality sound wirelessly with minimal loss. The ZX7
						bookshelf speaker uses high-end audiophile components that
						represents the top of the line powered speakers for home or studio
						use.
					</p>
					<Link className='h-25 w-1/2 my-4 py-2' to={'zx7'}>
						<button className='py-2 w-full bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
							SEE PRODUCT
						</button>
					</Link>
				</div>
			</div>
			<div className='flex flex-col justify-evenly items-center mt-8'>
				<div className='h-36 w-3/4 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl'>
					<img
						className='absolute left-1/2 transform -translate-x-1/2 -translate-y-24'
						src={itemHeadphones}
						alt='headphones'
					/>
					<p className='text-[#101010] font-bold tracking-wider	'>HEADPHONES</p>
					<div className='flex flex-row items-center'>
						<Link className='py-4' to={'/headphones'}>
							<a href='' className=' text-[#808080] font-bold'>
								SHOP
							</a>
						</Link>
						<AiOutlineRight className=' text-[#D87D4A] font-bold' />
					</div>
				</div>
				<div className='h-36 w-3/4 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl'>
					<img
						className='absolute left-1/2 transform -translate-x-1/2 -translate-y-24'
						src={itemSpeakers}
						alt='speakers'
					/>
					<p className='text-[#101010] font-bold tracking-wider	'>SPEAKERS</p>
					<div className='flex flex-row items-center'>
						<Link className='py-4' to={'/speakers'}>
							<a href='' className=' text-[#808080] font-bold'>
								SHOP
							</a>
						</Link>
						<AiOutlineRight className=' text-[#D87D4A] font-bold' />
					</div>
				</div>
				<div className='h-36 w-3/4 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl'>
					<img
						className='absolute left-1/2 transform -translate-x-1/2 -translate-y-24'
						src={itemEarphones}
						alt='earphones'
					/>
					<p className='text-[#101010] font-bold tracking-wider	'>EARPHONES</p>
					<div className='flex flex-row items-center'>
						<Link className='py-4' to={'/earphones'}>
							<a href='' className=' text-[#808080] font-bold'>
								SHOP
							</a>
						</Link>
						<AiOutlineRight className=' text-[#D87D4A] font-bold' />
					</div>
				</div>
				<div className='h-64 w-3/4 my-8 flex flex-col justify-center items-center'>
					<img src={photoMan} alt='Man' className='rounded-xl' />
				</div>
				<div className='h-96 w-3/4 flex flex-col justify-between items-center'>
					<p className='text-2xl font-bold my-2 text-[#101010] tracking-normal'>
						BRINGING YOU THE
						<span className='text-2xl font-bold text-[#fbaf85] tracking-normal'>
							{' '}
							BEST{' '}
						</span>
						AUDIO GEAR
					</p>
					<p className=' mb-8 text-[#808080]'>
						Located at the heart of New York City, Audiophile is the premier
						store for high end headphones, earphones, speakers, and audio
						accessories. We have a large showroom and luxury demonstration rooms
						available for you to browse and experience a wide range of our
						products. Stop by our store to meet some of the fantastic people who
						make Audiophile the best place to buy your portable audio equipment.
					</p>
				</div>
			</div>
		</div>
	);
};

export const Speakers = () => {
	return (
		<>
			<div className='hidden sm:block'>
				<SpeakersDesktop />
			</div>

			<div className='block sm:hidden'>
				<SpeakersMobile />
			</div>
		</>
	);
};
