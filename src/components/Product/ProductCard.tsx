import React, { useEffect, useState } from 'react';
import sanityClient from '../../client';
import { useSelector } from 'react-redux';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useAppDispatch } from 'components/hooks/useTypedSelector';

import { Cart } from 'components/Cart/Cart';
import { CategoryLink } from 'components/CategoryLink/CategoryLink';
import { cartActions } from 'components/store/Cart';
import { AboutUs } from 'components/Aboutus/AboutUs';
import { Chat } from 'components/Chat/Chat';
import { Navigation } from 'components/Navigation/Navigation';
import { Footer } from 'components/Footer/Footer';

import { ClipLoader } from 'react-spinners';
import { ProductNotification } from './ProductNotification';

type Product = {
	_id: number;
	name: string;
	shortName: string;
	price: number;
	description: string;
	feature1: string;
	feature2: string;
	imageDesktop: string;
	imageMobile: string;
	imageCart: string;
	photoGalleryDesktop1: string;
	photoGalleryDesktop2: string;
	photoGalleryDesktop3: string;
	photoGalleryMobile1: string;
	photoGalleryMobile2: string;
	photoGalleryMobile3: string;
	contents: {
		name: string;
		quantity: number;
	}[];
	category: {
		name: string;
	};
};

export const ProductCard = () => {
	const [product, setProduct] = useState<Product | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [questionModal, setquestionModal] = useState<boolean>(false);
	const [addedToCart, setAddedToCart] = useState<boolean>(false);
	const { productName } = useParams();
	const [quantity, setQuantity] = useState(1);
	const dispatch = useAppDispatch();
	const showCart = useSelector((state: any) => state.ui.cartIsVisible);
	const navigate = useNavigate();

	const addToCart = () => {
		if (product) {
			dispatch(cartActions.addItem({ quantity, product: product as Product }));
			setAddedToCart(true);
			setQuantity(1);
			setTimeout(() => {
				setAddedToCart(false);
			}, 3000);
		}
	};

	useEffect(() => {
		const fetchProducts = async () => {
			if (!productName) {
				return null;
			}
			setIsLoading(true);
			const productQuery = `*[_type == "products" && slug.current == "${productName}"]{_id,name,shortName,
					price,
					  slug,
					description,
					feature1,
					feature2,
					contents,
					"imageDesktop": imageDesktop.asset->url,
					"imageMobile": imageMobile.asset->url,
					"imageCart": imageCart.asset->url,
					"photoGalleryDesktop1": photoGalleryDesktop1.asset->url,
					"photoGalleryDesktop2": photoGalleryDesktop2.asset->url,
                    "photoGalleryDesktop3": photoGalleryDesktop3.asset->url,
					"photoGalleryMobile1": photoGalleryMobile1.asset->url,
					"photoGalleryMobile2": photoGalleryMobile2.asset->url,
                    "photoGalleryMobile3": photoGalleryMobile3.asset->url,
					category[]->{
					  name,
					}
				  }[0]`;
			const response = await sanityClient.fetch(productQuery);
			if (!response) {
				setError(true);
				setIsLoading(false);
			} else {
				setProduct(response);
				setIsLoading(false);
			}
		};

		fetchProducts();
	}, [productName]);

	if (isLoading) {
		return (
			<div className='flex justify-center items-center my-48'>
				<ClipLoader color='#D87D4A' loading={isLoading} size={100} />
			</div>
		);
	}

	if (error) {
		return <Navigate to='*' />;
	}

	return (
		<div className='flex flex-col w-full  mb-4'>
			<Navigation />
			{showCart && (
				<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30'>
					<div className='flex justify-center lg:justify-end items-start lg:items-start h-full'>
						<Cart />
					</div>
				</div>
			)}
			<div className='flex justify-center'>
				{product && (
					<ProductNotification
						quantity={quantity}
						name={product.name}
						imageCart={product.imageCart}
						isVisible={addedToCart}
					/>
				)}
			</div>
			<div className='flex w-full items-center justify-center py-4'>
				<button
					onClick={() => navigate(-1)}
					className='w-3/4 text-[#808080] text-sm text-left'
				>
					Go Back
				</button>
			</div>
			<div className='flex flex-col w-full justify-between items-center'>
				<div className=' w-3/4 flex flex-col lg:flex-row justify-center items-center rounded-xl'>
					<img
						src={product?.imageMobile}
						alt='Zdjecie produktu'
						className='mt-4 rounded-xl w-full lg:w-3/4'
					/>
					<div className='flex flex-col items-center lg:items-end'>
						<p className='py-4  text-[#fbaf85] tracking-widest w-full lg:w-3/4 text-left'>
							NEW PRODUCT
						</p>
						<p className='text-[#101010] text-2xl font-bold pb-4 text-left w-full lg:w-3/4 uppercase'>
							{product?.name}
						</p>
						<p className='text-[#808080] text-sm text-left w-full lg:w-3/4'>
							{product?.description}
						</p>
						<p className='text-[#101010] text-2xl font-bold pt-4 w-full lg:w-3/4 text-left'>
							$ {product?.price?.toLocaleString('en-US')}
						</p>
						<div className='flex w-full lg:w-3/4 justify-between mt-4 mb-10'>
							<div className='flex justify-between lg:evenly-around w-1/4 lg:w-1/4 bg-[#F1F1F1] space-x-2'>
								<button
									className='px-2 py-1 bg-[#F1F1F1]'
									onClick={() =>
										setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
									}
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
							<div className=' flex justify-start w-2/4 lg:w-2/4'>
								<button
									className='w-full py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'
									onClick={addToCart}
								>
									<p>Add to cart</p>
								</button>
							</div>
						</div>
						<div className='w-full lg:w-3/4 py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85] cursor-pointer'>
							<button
								onClick={() => setquestionModal(!questionModal)}
								className='w-full'
							>
								<p>Ask our consultant about the {product?.name}</p>
							</button>
						</div>
					</div>
				</div>
				{questionModal && (
					<Chat
						name={product?.name}
						imageCart={product?.imageCart}
						setquestionModal={setquestionModal}
					/>
				)}
				<div className='w-3/4 flex flex-col justify-between lg:flex-row my-4'>
					<div className='w-full lg:w-1/2 flex flex-col'>
						<p className='font-bold text-2xl text-left'>FEATURES</p>
						<p className='text-left text-[#808080] my-4 text-base'>
							{product?.feature1}
						</p>
						<p className='text-left text-[#808080] my-4 text-base'>
							{product?.feature2}
						</p>
					</div>
					<div className='w-3/4 lg:w-1/3 flex flex-col'>
						<p className='font-bold text-2xl text-left my-2'>IN THE BOX</p>
						<ul>
							{product?.contents.map((item) => (
								<li className='flex justify-between mb-2'>
									<p className='w-1/5 text-left text-[#fbaf85]'>{`${item.quantity}x`}</p>
									<p className='w-full text-left text-[#808080]'>{item.name}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='w-3/4 flex flex-col lg:flex-row justify-between '>
					<div className='w-full flex flex-col'>
						<img
							src={product?.photoGalleryMobile1}
							srcSet={`${product?.photoGalleryMobile1} 1024w, ${product?.photoGalleryDesktop1} 1280w`}
							alt='photo1'
							className=' rounded-md mb-4 lg:w-3/4'
						/>
						<img
							src={product?.photoGalleryMobile2}
							srcSet={`${product?.photoGalleryMobile2} 1024w, ${product?.photoGalleryDesktop2} 1280w`}
							alt='photo2'
							className=' rounded-md mb-4 lg:w-3/4'
						/>
					</div>
					<div className='w-full flex'>
						<img
							src={product?.photoGalleryMobile3}
							srcSet={`${product?.photoGalleryMobile3} 1024w, ${product?.photoGalleryDesktop3} 1280w`}
							alt='photo3'
							className=' rounded-md mb-4 w-full'
						/>
					</div>
				</div>
			</div>
			<CategoryLink />
			<AboutUs />
			<Footer />
		</div>
	);
};
