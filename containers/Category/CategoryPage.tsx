import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sanityClient from '../../client';

import { Cart } from '../../../modules/Cart/Cart';
import { CategoryLink } from '../CategoryLink/CategoryLink';
import { AboutUs } from '../../../shared/Aboutus/AboutUs';

type Props = {};

type Category = {
	name: string;
	categories: {
		name: string;
		description: string;
		router: string;
		imageDesktop: string;
		imageTablet: string;
		imageMobile: string;
	}[];
};

export const CategoryPage = (_: Props) => {
	const { categoryid } = useParams();
	const [category, setCategory] = useState<Category | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<
		{ message: string; status: number } | undefined
	>(undefined);
	const showCart = useSelector((state: any) => state.ui.cartIsVisible);

	useEffect(() => {
		const fetchProducts = async () => {
			if (!categoryid) {
				return null;
			}
			setIsLoading(true);
			const query = `*[_type == "category" && slug.current == "${categoryid}"]{
				name,
				categories[]{
				  name,
				  description,
				  router,
				  "imageDesktop": imageDesktop.asset->url,
				"imageTablet": imageTablet.asset->url,
				"imageMobile": imageMobile.asset->url,
				}
			  }[0]`;
			try {
				const response = await sanityClient.fetch(query);
				setCategory(response);
			} catch (error: any) {
				setError({ status: error.status, message: error.message });
			} finally {
				setIsLoading(false);
			}
		};

		fetchProducts();
	}, [categoryid]);

	if (isLoading) {
		return <h1>Loading...............</h1>;
	} else if (error?.status === 404) {
		return <h1>Mordo, nie mam takiego produktu.</h1>;
	} else if (error) {
		return <h1>{error.message}</h1>;
	}

	return (
		<div className='flex flex-col w-full mb-4'>
			<div className={`flex items-center justify-center bg-[#101010] py-6`}>
				<p className='text-[#FFFFFF] font-bold text-2xl lg:text-2xl tracking-widest uppercase'>
					{category?.name}
				</p>
			</div>
			{showCart && <Cart />}
			{category?.categories.map((item) => (
				<div
					key={`product-${item.name}`}
					className='flex flex-col justify-between items-center my-2 lg:flex-row lg:justify-around lg:my-8'
				>
					<div className=' w-3/4 flex flex-col justify-center items-center rounded-xl lg:flex-row lg:justify-between'>
						<div className='flex justify-center items-center rounded-xl pt-8 lg:w-2/5 odd:order-1 even:order-2'>
							<img
								src={item.imageMobile}
								srcSet={`${item.imageMobile} 1024w, ${item.imageDesktop} 1280w`}
								alt='speakers'
								className='mt-2 rounded-xl'
							/>
						</div>
						<div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:w-2/5 odd:order-2 even:order-1'>
							<p className=' px-2 lg:px-0 py-4 lg:text-xl text-[#fbaf85] tracking-widest'>
								NEW PRODUCT
							</p>
							<p className='text-[#101010] text-2xl lg:text-4xl lg:text-left font-bold pb-4 lg:w-1/2 uppercase'>
								{item.name}
							</p>
							<p className='text-[#808080] text-sm lg:text-left lg:w-4/5'>
								{item.description}
							</p>
							<Link to={`/:categoryid/${item.router}`}>
								<button
									data-testid='redirect-product'
									className='h-25 w-1/2 lg:w-full my-4 py-2 lg:px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'
								>
									SEE PRODUCT
								</button>
							</Link>
						</div>
					</div>
				</div>
			))}
			<CategoryLink />
			<AboutUs />
		</div>
	);
};
