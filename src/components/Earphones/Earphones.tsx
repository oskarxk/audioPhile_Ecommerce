import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const YX1 = require('../../Assets/products/product-yx1-earphones/mobile/image-category-page-preview.jpg');
const YX1Desktop = require('../../Assets/products/product-yx1-earphones/desktop/image-category-page-preview.jpg');

const itemHeadphones = require('../../Assets/home/cart/image-removebg-headphones.png');
const itemSpeakers = require('../../Assets/home/cart/image-removebg-speaker.png');
const itemSpeakersMobile = require('../../Assets/home/cart/image-removebg-speaker.png');
const itemEarphones = require('../../Assets/home/cart/image-removebg-earphones.png');
const photoMan = require('../../Assets/home/mobile/image-best-gear.jpg');

type Props = {};

const EarphonesDesktop = (props: Props) => {
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
					EARPHONES
				</p>
			</div>
			<div className='flex justify-around items-center my-8'>
				<div className='w-2/5 flex justify-center items-center rounded-xl pt-8'>
					<img src={YX1Desktop} alt='speakers' className='mt-2 rounded-xl' />
				</div>
				<div className='flex flex-col justify-center items-start w-2/5'>
					<p className=' py-4  text-[#fbaf85] text-xl tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-4xl font-bold pb-4'>
						YX1 WIRELESS EARPHONES
					</p>
					<p className='text-[#808080] text-sm text-left w-1/2'>
						Tailor your listening experience with bespoke dynamic drivers from
						the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
						even in noisy environments with its active noise cancellation
						feature.
					</p>
					<button className='my-2 py-2 px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
						SEE PRODUCT
					</button>
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

export const Earphones = (props: Props) => {
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
				<p className='text-[#FFFFFF] font-bold text-2xl lg:text-2xl tracking-widest'>
					EARPHONES
				</p>
			</div>
			<div className='flex flex-col justify-between items-center my-2 lg:flex-row lg:justify-around lg:my-8'>
				<div className=' w-3/4 flex flex-col justify-center items-center rounded-xl lg:flex-row lg:justify-between'>
					<div className='flex justify-center items-center rounded-xl pt-8 lg:w-2/5'>
						<img
							src={YX1}
							srcSet={`${YX1} 1024w, ${YX1Desktop} 1280w`}
							alt='speakers'
							className='mt-2 rounded-xl'
						/>
					</div>
					<div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:w-2/5'>
						<p className=' px-2 lg:px-0 py-4 lg:text-xl text-[#fbaf85] tracking-widest'>
							NEW PRODUCT
						</p>
						<p className='text-[#101010] text-2xl lg:text-4xl lg:text-left font-bold pb-4 lg:w-1/2'>
							YX1 WIRELESS EARPHONES
						</p>
						<p className='text-[#808080] text-sm lg:text-left lg:w-4/5'>
							Tailor your listening experience with bespoke dynamic drivers from
							the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
							sound even in noisy environments with its active noise
							cancellation feature.
						</p>
						<Link to={'/earphones/yx1'}>
							<button className='h-25 w-1/2 lg:w-full my-4 py-2 lg:px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
								SEE PRODUCT
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className='flex justify-center items-center lg:flex-row'>
				<div className='flex flex-col lg:flex-row justify-between items-center my-8 w-3/4'>
					<div className='h-36 w-3/4 lg:w-1/5 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl'>
						<img
							className='absolute left-1/2 transform -translate-x-1/2 -translate-y-24'
							src={itemHeadphones}
							alt='headphones'
						/>
						<p className='text-[#101010] font-bold tracking-wider	'>
							HEADPHONES
						</p>
						<div className='flex flex-row items-center'>
							<Link className='py-4' to={'/headphones'}>
								<a href='' className=' text-[#808080] font-bold'>
									SHOP
								</a>
							</Link>
							<AiOutlineRight className=' text-[#D87D4A] font-bold' />
						</div>
					</div>
					<div className='h-36 w-3/4 lg:w-1/5 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl'>
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
					<div className='h-36 w-3/4 lg:w-1/5 bg-[#F1F1F1] my-8 flex flex-col justify-end items-center relative rounded-xl'>
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
			</div>
			<div className='flex justify-center items-center lg:flex-row lg:justify-around'>
				<div className='flex flex-col lg:flex-row justify-center items-center lg:w-3/4'>
					<div className=' w-3/4 my-8 flex flex-col justify-center items-center lg:items-end lg:order-1'>
						<img src={photoMan} alt='Man' className='rounded-xl' />
					</div>
					<div className=' w-3/4 flex flex-col justify-between items-center lg:items-start'>
						<p className='lg:w-1/2 text-2xl lg:text-3xl lg:text-left font-bold my-2 lg:my-6 text-[#101010] tracking-normal'>
							BRINGING YOU THE
							<span className='text-2xl lg:text-3xl font-bold text-[#fbaf85] tracking-normal'>
								{' '}
								BEST{' '}
							</span>
							AUDIO GEAR
						</p>
						<p className=' mb-8 text-[#808080] lg:text-lg lg:text-left'>
							Located at the heart of New York City, Audiophile is the premier
							store for high end headphones, earphones, speakers, and audio
							accessories. We have a large showroom and luxury demonstration
							rooms available for you to browse and experience a wide range of
							our products. Stop by our store to meet some of the fantastic
							people who make Audiophile the best place to buy your portable
							audio equipment.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
