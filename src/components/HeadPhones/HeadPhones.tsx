import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const XX99M2 = require('../../Assets/products/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg');
const XX99M2Desktop = require('../../Assets/products/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg');
const XX99M1 = require('../../Assets/products/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg');
const XX99M1Desktop = require('../../Assets/products/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg');
const XX59 = require('../../Assets/products/product-xx59-headphones/mobile/image-category-page-preview.jpg');
const XX59Desktop = require('../../Assets/products/product-xx59-headphones/desktop/image-category-page-preview.jpg');
const itemHeadphones = require('../../Assets/home/cart/image-removebg-headphones.png');
const itemSpeakers = require('../../Assets/home/cart/image-removebg-speaker.png');
const itemSpeakersMobile = require('../../Assets/home/cart/image-removebg-speaker.png');
const itemEarphones = require('../../Assets/home/cart/image-removebg-earphones.png');
const photoMan = require('../../Assets/home/mobile/image-best-gear.jpg');

type Props = {};

const HeadPhonesDesktop = (props: Props) => {
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
					HEADPHONES
				</p>
			</div>
			<div className='flex justify-around items-center my-8'>
				<div className='w-2/5 flex justify-center items-center rounded-xl pt-8'>
					<img src={XX99M2Desktop} alt='speakers' className='mt-2 rounded-xl' />
				</div>
				<div className='flex flex-col justify-center items-start w-2/5'>
					<p className=' py-4  text-[#fbaf85] text-xl tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-4xl font-bold pb-4'>
						XX99 MARK II HEADPHONES
					</p>
					<p className='text-[#808080] text-sm text-left w-2/3'>
						The new XX99 Mark II headphones is the pinnacle of pristine audio.
						It redefines your premium headphone experience by reproducing the
						balanced depth and precision of studio-quality sound.
					</p>
					<button className='my-4 py-2 px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
						SEE PRODUCT
					</button>
				</div>
			</div>
			<div className='flex justify-around items-center my-8'>
				<div className='flex flex-col justify-center items-start w-2/5'>
					<p className=' py-4  text-[#fbaf85] text-xl tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-4xl font-bold pb-4'>
						XX99 MARK I HEADPHONES
					</p>
					<p className='text-[#808080] text-sm text-left w-2/3'>
						As the gold standard for headphones, the classic XX99 Mark I offers
						detailed and accurate audio reproduction for audiophiles, mixing
						engineers, and music aficionados alike in studios and on the go.
					</p>
					<button className='my-4 py-2 px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
						SEE PRODUCT
					</button>
				</div>
				<div className='w-2/5 flex justify-center items-center rounded-xl pt-8'>
					<img src={XX99M1Desktop} alt='speakers' className='mt-2 rounded-xl' />
				</div>
			</div>
			<div className='flex justify-around items-center my-8'>
				<div className='w-2/5 flex justify-center items-center rounded-xl pt-8'>
					<img src={XX59Desktop} alt='speakers' className='mt-2 rounded-xl' />
				</div>
				<div className='flex flex-col justify-center items-start w-2/5'>
					<p className=' py-4  text-[#fbaf85] text-xl tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-4xl font-bold pb-4'>
						XX59 HEADPHONES
					</p>
					<p className='text-[#808080] text-sm text-left w-2/3'>
						Enjoy your audio almost anywhere and customize it to your specific
						tastes with the XX59 headphones. The stylish yet durable versatile
						wireless headset is a brilliant companion at home or on the move.
					</p>
					<button className='my-4 py-2 px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
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

const HeadPhonesMobile = (props: Props) => {
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
					HEADPHONES
				</p>
			</div>
			<div className='flex flex-col justify-between items-center my-32'>
				<div className='h-96 w-3/4 flex flex-col justify-center items-center rounded-xl'>
					<img src={XX99M2} alt='speakers' className='mt-2 rounded-xl' />
					<p className=' px-2 py-4  text-[#fbaf85] tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-2xl font-bold pb-4'>
						XX99 MARK II HEADPHONES
					</p>
					<p className='text-[#808080] text-sm'>
						The new XX99 Mark II headphones is the pinnacle of pristine audio.
						It redefines your premium headphone experience by reproducing the
						balanced depth and precision of studio-quality sound.
					</p>
					<button className='h-25 w-1/2 my-4 py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
						SEE PRODUCT
					</button>
				</div>
			</div>
			<div className='flex flex-col justify-between items-center my-32'>
				<div className='h-96 w-3/4 flex flex-col justify-center items-center rounded-xl'>
					<img src={XX99M1} alt='speakers' className='mt-2 rounded-xl' />
					<p className=' px-2 py-4  text-[#fbaf85] tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-2xl font-bold pb-4'>
						XX99 MARK I HEADPHONES
					</p>
					<p className='text-[#808080] text-sm'>
						As the gold standard for headphones, the classic XX99 Mark I offers
						detailed and accurate audio reproduction for audiophiles, mixing
						engineers, and music aficionados alike in studios and on the go.
					</p>
					<button className='h-25 w-1/2 my-4 py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
						SEE PRODUCT
					</button>
				</div>
			</div>
			<div className='flex flex-col justify-between items-center my-32'>
				<div className='h-96 w-3/4 flex flex-col justify-center items-center rounded-xl'>
					<img src={XX59} alt='speakers' className='mt-2 rounded-xl' />
					<p className=' px-2 py-4  text-[#fbaf85] tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-2xl font-bold pb-4'>
						XX59 HEADPHONES
					</p>
					<p className='text-[#808080] text-sm'>
						Enjoy your audio almost anywhere and customize it to your specific
						tastes with the XX59 headphones. The stylish yet durable versatile
						wireless headset is a brilliant companion at home or on the move.
					</p>
					<button className='h-25 w-1/2 my-4 py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
						SEE PRODUCT
					</button>
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

export const HeadPhones = () => {
	return (
		<>
			<div className='hidden sm:block'>
				<HeadPhonesDesktop />
			</div>
			<div className='block sm:hidden'>
				<HeadPhonesMobile />
			</div>
		</>
	);
};
