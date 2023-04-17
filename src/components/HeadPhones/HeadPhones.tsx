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

export const HeadPhones = (props: Props) => {
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
					HEADPHONES
				</p>
			</div>
			<div className='flex flex-col justify-between items-center my-2 lg:flex-row lg:justify-around lg:my-8'>
				<div className=' w-3/4 flex flex-col justify-center items-center rounded-xl lg:flex-row lg:justify-between'>
					<div className='flex justify-center items-center rounded-xl pt-8 lg:w-2/5'>
						<img
							src={XX99M2}
							srcSet={`${XX99M2} 1024w, ${XX99M2Desktop} 1280w`}
							alt='speakers'
							className='mt-2 rounded-xl'
						/>
					</div>
					<div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:w-2/5'>
						<p className=' px-2 lg:px-0 py-4 lg:text-xl text-[#fbaf85] tracking-widest'>
							NEW PRODUCT
						</p>
						<p className='text-[#101010] text-2xl lg:text-4xl lg:text-left font-bold pb-4 lg:w-1/2'>
							XX99 MARK II HEADPHONES
						</p>
						<p className='text-[#808080] text-sm lg:text-left lg:w-4/5'>
							The new XX99 Mark II headphones is the pinnacle of pristine audio.
							It redefines your premium headphone experience by reproducing the
							balanced depth and precision of studio-quality sound.
						</p>
						<Link to={'/headphones/xx99m2'}>
							<button className='h-25 w-1/2 lg:w-full my-4 py-2 lg:px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
								SEE PRODUCT
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-between items-center my-2 lg:flex-row lg:justify-around lg:my-8'>
				<div className=' w-3/4 flex flex-col justify-center items-center rounded-xl lg:flex-row lg:justify-between'>
					<div className='flex justify-center items-center rounded-xl pt-8 lg:w-2/5 lg:order-1'>
						<img
							src={XX99M1}
							srcSet={`${XX99M1} 1024w, ${XX99M1Desktop} 1280w`}
							alt='speakers'
							className='mt-2 rounded-xl'
						/>
					</div>
					<div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:w-2/5'>
						<p className=' px-2 lg:px-0 py-4 lg:text-xl text-[#fbaf85] tracking-widest'>
							NEW PRODUCT
						</p>
						<p className='text-[#101010] text-2xl lg:text-4xl lg:text-left font-bold pb-4 lg:w-1/2'>
							XX99 MARK I HEADPHONES
						</p>
						<p className='text-[#808080] text-sm lg:text-left lg:w-4/5'>
							As the gold standard for headphones, the classic XX99 Mark I
							offers detailed and accurate audio reproduction for audiophiles,
							mixing engineers, and music aficionados alike in studios and on
							the go.
						</p>
						<Link to={'/headphones/xx99m1'}>
							<button className='h-25 w-1/2 lg:w-full my-4 py-2 lg:px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
								SEE PRODUCT
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className='flex flex-col justify-between items-center my-2 lg:flex-row lg:justify-around lg:my-8'>
				<div className=' w-3/4 flex flex-col justify-center items-center rounded-xl lg:flex-row lg:justify-between'>
					<div className='flex justify-center items-center rounded-xl pt-8 lg:w-2/5'>
						<img
							src={XX59}
							srcSet={`${XX59} 1024w, ${XX59Desktop} 1280w`}
							alt='speakers'
							className='mt-2 rounded-xl'
						/>
					</div>
					<div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:w-2/5'>
						<p className=' px-2 lg:px-0 py-4 lg:text-xl text-[#fbaf85] tracking-widest'>
							NEW PRODUCT
						</p>
						<p className='text-[#101010] text-2xl lg:text-4xl lg:text-left font-bold pb-4 lg:w-1/2'>
							XX59 HEADPHONES
						</p>
						<p className='text-[#808080] text-sm lg:text-left lg:w-4/5'>
							Enjoy your audio almost anywhere and customize it to your specific
							tastes with the XX59 headphones. The stylish yet durable versatile
							wireless headset is a brilliant companion at home or on the move.
						</p>
						<Link to={'/headphones/xx59'}>
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
