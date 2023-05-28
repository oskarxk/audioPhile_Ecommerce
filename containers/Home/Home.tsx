import React from 'react';
import { Link } from 'react-router-dom';
import { AboutUs } from '../../shared/Aboutus/AboutUs';
import { CategoryLink } from '../Category/CategoryLink/CategoryLink';
import { Cart } from '../../modules/Cart/Cart';

import { useSelector } from 'react-redux';

const headerImageMobile = require('../../Assets/home/mobile/image-header.jpg');
const headerImageDesktop = require('../../Assets/home/desktop/image-hero.jpg');
const itemSpeakersMobile = require('../../Assets/home/cart/image-removebg-speaker.png');
const itemSpeakersDesktop = require('../../Assets/home//tablet/image-speaker-zx9.png');

const photoSpeaker = require('../../Assets/home/mobile/image-speaker-zx7.jpg');
const photoSpeakerDesktop = require('../../Assets/home/desktop/image-speaker-zx7.jpg');
const photoEarphones = require('../../Assets/home/mobile/image-earphones-yx1.jpg');
const photoEarphonesDesktop = require('../../Assets/home/desktop/image-earphones-yx1.jpg');

export const Home = () => {
	const showCart = useSelector((state: any) => state.ui.cartIsVisible);
	return (
		<div className='flex flex-col relative'>
			{showCart && <Cart />}
			<div className='relative lg:mb-8'>
				<div className='absolute inset-0 flex flex-col justify-center lg:px-40'>
					<p className='text-sm lg:text-5xl font-semibold lg:font-bold text-center lg:text-left mb-2 lg:mb-4 tracking-widest text-[#808080]'>
						NEW PRODUCT
					</p>
					<h2 className='text-3xl lg:text-5xl font-bold text-center lg:text-left mb-4 lg:w-1/2 text-[#FFFFFF]'>
						XX99 MARK II HEADPHONES
					</h2>
					<p className='text-center lg:text-left lg:px-0 lg:text-lg lg:w-1/3 px-8 pt-2 text-[#F1F1F1]'>
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast
					</p>
					<div className='w-full flex justify-center lg:justify-start mt-14'>
						<Link className='py-4' to={'/headphones/xx99m2'}>
							<button className='h-25 bg-[#D87D4A] text-white font-bold py-2 px-4 hover:bg-[#fbaf85]'>
								SEE PRODUCT
							</button>
						</Link>
					</div>
				</div>
				<img
					className='block w-full'
					src={headerImageMobile}
					srcSet={`${headerImageMobile} 1024w, ${headerImageDesktop} 1280w`}
					alt='Hero'
				/>
			</div>
			<CategoryLink />
			<div className='flex flex-col justify-around lg:justify-between items-center mt-4 lg:mt-0'>
				<div className='w-3/4  bg-[#fbaf85] my-8 lg:my-0 lg:pt-16 flex lg:flex-row flex-col justify-evenly items-center rounded-xl'>
					<img
						src={itemSpeakersMobile}
						srcSet={`${itemSpeakersMobile} 1024w, ${itemSpeakersDesktop} 1280w`}
						alt='speakers'
					/>
					<div className='w-1/3 flex flex-col justify-center items-center lg:items-start'>
						<p className='text-2xl lg:text-5xl px-16 lg:px-0 lg:w-1/2 lg:text-left lg:tracking-wider font-bold text-[#FFFFFF]'>
							ZX9 SPEAKER
						</p>
						<p className='text-[#FFFFFF] lg:text-2xl lg:text-left lg:py-4'>
							Upgrade to premium speakers that are phenomenally built to deliver
							truly remarkable sound.
						</p>
						<Link className='py-4' to={'/speakers/zx9'}>
							<button className='h-12 lg:h-16 w-1/2 lg:w-full lg:px-4 bg-[#101010] text-white font-bold text-sm'>
								SEE PRODUCT
							</button>
						</Link>
					</div>
				</div>
				<div className='w-3/4 flex flex-col justify-center lg:justify-around items-center rounded-xl relative lg:my-8'>
					<img
						src={photoSpeaker}
						srcSet={`${photoSpeaker} 1024w, ${photoSpeakerDesktop} 1280w`}
						alt='speakers'
						className='rounded-xl w-full'
					/>
					<p className='absolute left-3 lg:left-6 top-1/3 transform text-2xl lg:text-4xl font-bold text-[#101010] text-left'>
						ZX7 SPEAKER
					</p>
					<Link to={'/speakers/zx7'}>
						<button className='h-12 w-1/2 lg:w-1/6 bg-transparent border border-[#101010] text-[#101010] font-bold text-sm absolute left-3 lg:left-6 top-1/2 transform -translate-y-1/2 mt-4'>
							SEE PRODUCT
						</button>
					</Link>
				</div>
				<div className='flex flex-col lg:flex-row w-3/4 lg:w-3/4 justify-center lg:justify-between items-center'>
					<div className='w-3/4 lg:w-full my-2 lg:my-0 flex flex-col justify-center items-center rounded-xl relative'>
						<img
							src={photoEarphones}
							srcSet={`${photoEarphones} 1024w, ${photoEarphonesDesktop} 1280w`}
							alt='speakers'
							className='rounded-xl'
						/>
					</div>
					<div className='w-3/4 lg:w-4/6 lg:h-full bg-[#F1F1F1] my-2 lg:my-0 flex flex-col justify-evenly lg:justify-center items-left relative rounded-xl'>
						<p className='text-[#101010] font-bold tracking-wider	text-left ml-4 lg:ml-16 text-2xl lg:text-3xl'>
							YX1 EARPHONES
						</p>
						<button className='h-12 w-1/2 bg-transparent border border-[#101010] text-[#101010] font-bold text-sm ml-4 lg:ml-16 my-4'>
							SEE PRODUCT
						</button>
					</div>
				</div>
				<AboutUs />
			</div>
		</div>
	);
};
