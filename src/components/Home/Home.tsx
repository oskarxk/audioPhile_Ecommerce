import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const headerImageMobile = require('../../Assets/home/mobile/image-header.jpg');
const headerImageTablet = require('../../Assets/home/tablet/image-header.jpg');
const headerImageDesktop = require('../../Assets/home/desktop/image-hero.jpg');
const itemHeadphones = require('../../Assets/home/cart/image-removebg-headphones.png');
const itemSpeakersMobile = require('../../Assets/home/cart/image-removebg-speaker.png');
const itemSpeakersDesktop = require('../../Assets/home//tablet/image-speaker-zx9.png');

const itemEarphones = require('../../Assets/home/cart/image-removebg-earphones.png');
const photoSpeaker = require('../../Assets/home/mobile/image-speaker-zx7.jpg');
const photoSpeakerDesktop = require('../../Assets/home/desktop/image-speaker-zx7.jpg');
const photoEarphones = require('../../Assets/home/mobile/image-earphones-yx1.jpg');
const photoEarphonesDesktop = require('../../Assets/home/desktop/image-earphones-yx1.jpg');

const photoMan = require('../../Assets/home/mobile/image-best-gear.jpg');

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
		<div className='flex flex-col'>
			<div className='relative'>
				<div className='absolute inset-0 flex flex-col justify-center px-40'>
					<p className='text-xl font-semibold text-left mb-2 tracking-widest text-[#808080]'>
						NEW PRODUCT
					</p>
					<h2 className='text-5xl font-bold text-left mb-4 w-1/2 text-[#FFFFFF]'>
						XX99 MARK II HEADPHONES
					</h2>
					<p className='text-left pt-2 text-[#F1F1F1] text-lg w-1/3'>
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast
					</p>
					<div className='w-full flex justify-start mt-14'>
						<button className='h-25 w-1/6 bg-[#D87D4A] text-white font-bold py-2 px-4 hover:bg-[#fbaf85]'>
							SEE PRODUCT
						</button>
					</div>
				</div>
				<img className='block w-full' src={headerImageDesktop} alt='' />
			</div>
			<div className='flex justify-evenly items-center mt-20'>
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
			<div className='flex justify-center items-center my-8 '>
				<div className='w-4/6 bg-[#fbaf85] pt-16 flex justify-evenly items-center rounded-xl'>
					<img src={itemSpeakersDesktop} alt='speakers' />
					<div className='w-1/3 flex flex-col'>
						<p className='text-5xl w-1/2 font-bold text-[#FFFFFF] text-left py-4 tracking-wider'>
							ZX9 SPEAKER
						</p>
						<p className='text-[#FFFFFF] text-2xl text-left py-4'>
							Upgrade to premium speakers that are phenomenally built to deliver
							truly remarkable sound.
						</p>
						<button className='h-16 w-1/2 bg-[#101010] text-xl text-white font-bold py-4'>
							SEE PRODUCT
						</button>
					</div>
				</div>
			</div>

			<div className='flex flex-col justify-around items-center '>
				<div className='h-80 w-4/6 flex flex-col justify-center items-center rounded-xl relative'>
					<img
						src={photoSpeakerDesktop}
						alt='speakers'
						className='rounded-xl w-full h-full object-cover'
					/>
					<p className='absolute left-6 top-1/3 transform text-4xl font-bold text-[#101010] text-left'>
						ZX7 SPEAKER
					</p>
					<button className='h-12 w-1/6 bg-transparent border border-[#101010] text-[#101010] font-bold text-sm absolute left-6 top-1/2 transform -translate-y-1/2 mt-8'>
						SEE PRODUCT
					</button>
				</div>
				<div className='flex justify-between w-4/6 my-8'>
					<div className='my-2 flex flex-col justify-center items-center rounded-xl relative'>
						<img
							src={photoEarphonesDesktop}
							alt='speakers'
							className='rounded-xl'
						/>
					</div>
					<div className='w-2/5 bg-[#F1F1F1] my-2 flex flex-col justify-center items-start relative rounded-xl'>
						<p className='text-[#101010] font-bold tracking-wider	text-left ml-16 py-4 text-3xl'>
							YX1 EARPHONES
						</p>
						<button className='h-12 w-1/2 bg-transparent border border-[#101010] text-[#101010] font-bold text-sm ml-16 py-4'>
							SEE PRODUCT
						</button>
					</div>
				</div>

				<div className='flex justify-between w-4/6'>
					<div className='w-2/5 flex flex-col justify-between items-center'>
						<p className='text-3xl font-bold my-2 text-[#101010] tracking-normal text-left pr-4'>
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
							accessories. We have a large showroom and luxury demonstration
							rooms available for you to browse and experience a wide range of
							our products. Stop by our store to meet some of the fantastic
							people who make Audiophile the best place to buy your portable
							audio equipment.
						</p>
					</div>
					<div className=' w-2/5 my-8 flex flex-col justify-center items-center'>
						<img src={photoMan} alt='Man' className='rounded-xl' />
					</div>
				</div>
			</div>
		</div>
	);
};

const MobileMenu = () => {
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
		<div className='flex flex-col'>
			<div className='relative'>
				<div className='absolute inset-0 flex flex-col justify-center'>
					<p className='text-sm font-semibold text-center mb-2 tracking-widest text-[#808080]'>
						NEW PRODUCT
					</p>
					<h2 className='text-3xl font-bold text-center mb-4 text-[#FFFFFF]'>
						XX99 MARK II HEADPHONES
					</h2>
					<p className='text-center px-8 pt-2 text-[#F1F1F1]'>
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast
					</p>
					<div className='w-full flex justify-center mt-14'>
						<button className='h-25 w-1/2 bg-[#D87D4A] text-white font-bold py-2 px-4 hover:bg-[#fbaf85]'>
							SEE PRODUCT
						</button>
					</div>
				</div>
				<img className='block w-full' src={headerImageMobile} alt='' />
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
			</div>
			<div className='flex flex-col  justify-around items-center mt-8 '>
				<div className='h-96 w-3/4 bg-[#fbaf85] my-8 flex flex-col justify-evenly items-center rounded-xl'>
					<img src={itemSpeakersMobile} alt='speakers' />
					<p className='text-2xl px-16 font-bold text-[#FFFFFF]'>ZX9 SPEAKER</p>
					<p className='text-[#FFFFFF]'>
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p>
					<button className='h-12 w-1/2 bg-[#101010] text-white font-bold text-sm'>
						SEE PRODUCT
					</button>
				</div>
				<div className='h-80 w-3/4  flex flex-col justify-center items-center rounded-xl relative'>
					<img src={photoSpeaker} alt='speakers' className='rounded-xl' />
					<p className='absolute left-3 top-1/3 transform text-2xl font-bold text-[#101010] text-left'>
						ZX7 SPEAKER
					</p>
					<button className='h-12 w-1/2 bg-transparent border border-[#101010] text-[#101010] font-bold text-sm absolute left-3 top-1/2 transform -translate-y-1/2 mt-4'>
						SEE PRODUCT
					</button>
				</div>
				<div className='h-48 w-3/4 my-2 flex flex-col justify-center items-center rounded-xl relative'>
					<img src={photoEarphones} alt='speakers' className='rounded-xl' />
				</div>
				<div className='h-36 w-3/4 bg-[#F1F1F1] my-2 flex flex-col justify-evenly items-left relative rounded-xl'>
					<p className='text-[#101010] font-bold tracking-wider	text-left ml-4 text-2xl'>
						YX1 EARPHONES
					</p>
					<button className='h-12 w-1/2 bg-transparent border border-[#101010] text-[#101010] font-bold text-sm ml-4'>
						SEE PRODUCT
					</button>
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

export const Home = () => {
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
