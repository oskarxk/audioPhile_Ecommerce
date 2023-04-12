import React, { useEffect, useState } from 'react';
import sanityClient from '../../client';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const itemHeadphones = require('../../Assets/home/cart/image-removebg-headphones.png');
const itemSpeakers = require('../../Assets/home/cart/image-removebg-speaker.png');
const itemEarphones = require('../../Assets/home/cart/image-removebg-earphones.png');
const photoMan = require('../../Assets/home/mobile/image-best-gear.jpg');
const photo1 = require('../../Assets/products/product-zx9-speaker/mobile/image-gallery-1.jpg');
const photo2 = require('../../Assets/products/product-zx9-speaker/mobile/image-gallery-2.jpg');
const photo3 = require('../../Assets/products/product-zx9-speaker/mobile/image-gallery-3.jpg');
const shared1 = require('../../Assets/shared/mobile/image-zx7-speaker.jpg');
const shared2 = require('../../Assets/shared/mobile/image-xx99-mark-one-headphones.jpg');
const shared3 = require('../../Assets/shared/mobile/image-xx59-headphones.jpg');

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

export const Zx9Product = (props: Props) => {
	const [zx9speaker, setProduct] = useState<Product | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const { id } = useParams();
	const [quantity, setQuantity] = useState(1);

	console.log(id);
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

	useEffect(() => {
		const fetchProducts = async () => {
			if (!id) {
				return null;
			}
			setIsLoading(true);
			const query = `*[_type == "products" && slug.current == "${id}"]{_id,name,
					price,
					  slug,
					description,
					"imageDesktop": imageDesktop.asset->url,
					"imageMobile": imageMobile.asset->url,
					category[]->{
					  name,
					}
				  }[0]`;
			const response = await sanityClient.fetch(query);
			if (!response) {
				setError(true);
				setIsLoading(false);
			} else {
				setProduct(response);
				setIsLoading(false);
			}
		};

		fetchProducts();
	}, [id]);

	if (isLoading) {
		return <h1>Loading...............</h1>;
	}

	if (error) {
		return <h1>Mordo, nie mam takiego produktu</h1>;
	}

	return (
		<div className='flex flex-col items-center w-full mb-4'>
			<div className='flex w-full items-center justify-center py-4'>
				<Link className='w-3/4' to={'/speakers'}>
					<p className=' text-[#808080] text-sm text-left'>Go Back</p>
				</Link>
			</div>
			<div className='flex flex-col w-full justify-between items-center'>
				<div className=' w-3/4 flex flex-col justify-center items-center rounded-xl'>
					<img
						src={zx9speaker?.imageMobile}
						alt='speakers'
						className='mt-4 rounded-xl'
					/>
					<div className='flex flex-col items-start'>
						<p className='py-4  text-[#fbaf85] tracking-widest'>NEW PRODUCT</p>
						<p className='text-[#101010] text-2xl font-bold pb-4 text-left'>
							{zx9speaker?.name}
						</p>
						<p className='text-[#808080] text-sm text-left'>
							{zx9speaker?.description}
						</p>
						<p className='text-[#101010] text-2xl font-bold pt-4'>
							$ {zx9speaker?.price?.toLocaleString('en-US')}
						</p>
					</div>
				</div>
				<div className='flex w-3/4 justify-between mt-4 mb-20'>
					<div className='flex justify-between w-1/3 bg-[#F1F1F1] space-x-2'>
						<button
							className='px-2 py-1 bg-[#F1F1F1]'
							onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
						>
							-
						</button>
						<div className='flex justify-center items-center'>
							<p className='px-2 py-1'>{quantity}</p>
						</div>
						<button
							className='px-2 py-1 bg-[#F1F1F1] '
							onClick={() => setQuantity((prev) => prev + 1)}
						>
							+
						</button>
					</div>
					<div className=' flex justify-start w-2/4'>
						<button className='w-full py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
							<p>Add to cart</p>
						</button>
					</div>
				</div>
				<div className='w-3/4 flex flex-col'>
					<p className='font-bold text-2xl text-left'>FEATURES</p>
					<p className='text-left text-[#808080] my-4 text-base'>
						{/* Connect via Bluetooth or nearly any wired source. This speaker
						features optical, digital coaxial, USB Type-B, stereo RCA, and
						stereo XLR inputs, allowing you to have up to five wired source
						devices connected for easy switching. Improved bluetooth technology
						offers near lossless audio quality at up to 328ft (100m). */}
						YOLOOOO!!!!!!
					</p>
					<p className='text-left text-[#808080] my-4 text-base'>
						Discover clear, more natural sounding highs than the competition
						with ZX9's signature planar diaphragm tweeter. Equally important is
						its powerful room-shaking bass courtesy of a 6.5” aluminum alloy
						bass unit. You'll be able to enjoy equal sound quality whether in a
						large room or small den. Furthermore, you will experience new
						sensations from old songs since it can respond to even the subtle
						waveforms.
					</p>
				</div>
				<div className='w-3/4 flex flex-col'>
					<p className='font-bold text-2xl text-left my-2'>IN THE BOX</p>
					<ul>
						<li className='flex justify-between mb-2'>
							<p className='w-1/5 text-left text-[#fbaf85]'>2x</p>
							<p className='w-4/5 text-left text-[#808080]'>Speaker unit</p>
						</li>
						<li className='flex justify-between mb-2'>
							<p className='w-1/5 text-left text-[#fbaf85]'>2x</p>
							<p className='w-4/5 text-left text-[#808080]'>
								Speaker cloth panel
							</p>
						</li>
						<li className='flex justify-between mb-2'>
							<p className='w-1/5 text-left text-[#fbaf85]'>1x</p>
							<p className='w-4/5 text-left text-[#808080]'>User Manual</p>
						</li>
						<li className='flex justify-between mb-2'>
							<p className='w-1/5 text-left text-[#fbaf85]'>1x</p>
							<p className='w-4/5 text-left text-[#808080]'>
								3.5mm 10m Audio Cable
							</p>
						</li>
						<li className='flex justify-between mb-2'>
							<p className='w-1/5 text-left text-[#fbaf85]'>1x</p>
							<p className='w-4/5 text-left text-[#808080]'>
								10m Optical Cable
							</p>
						</li>
					</ul>
				</div>
				<div className='w-3/4 flex flex-col justify-between my-8'>
					<img src={photo1} alt='photo1' className=' rounded-md mb-4' />
					<img src={photo2} alt='photo2' className=' rounded-md mb-4' />
					<img src={photo3} alt='photo3' className=' rounded-md mb-4' />
				</div>
			</div>
			<div className='w-3/4 flex flex-col items-center justify-between'>
				<p className='font-bold text-2xl my-4 text-center'>YOU MAY ALSO LIKE</p>
				<div>
					<img src={shared1} alt='shared1' className='rounded-md mt-8' />
					<p className='font-bold text-2xl my-8 text-center'>ZX7 SPEAKER</p>
					<button className='h-25 w-1/2 my-2 py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
						SEE PRODUCT
					</button>
				</div>
				<div>
					<img src={shared2} alt='shared1' className='rounded-md mt-8' />
					<p className='font-bold text-2xl my-8 text-center'>XX99 MARK I</p>
					<button className='h-25 w-1/2 my-2 py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
						SEE PRODUCT
					</button>
				</div>
				<div>
					<img src={shared3} alt='shared1' className='rounded-md mt-8' />
					<p className='font-bold text-2xl my-8 text-center'>XX59</p>
					<button className='h-25 w-1/2 my-2 py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
						SEE PRODUCT
					</button>
				</div>
			</div>
			<div className='flex flex-col justify-evenly items-center '>
				<div className='h-36 w-3/4 bg-[#F1F1F1] mt-28 mb-8 flex flex-col justify-end items-center relative rounded-xl'>
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
