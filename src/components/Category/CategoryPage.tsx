import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sanityClient from '../../client';

import { Cart } from 'components/Cart/Cart';
import { CategoryLink } from 'components/CategoryLink/CategoryLink';
import { AboutUs } from 'components/Aboutus/AboutUs';
import { CategoryItem } from './CategoryItem';

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

export const CategoryPage = (props: Props) => {
	const { categoryName } = useParams();
	const [category, setCategory] = useState<Category | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const showCart = useSelector((state: any) => state.ui.cartIsVisible);

	useEffect(() => {
		const fetchProducts = async () => {
			if (!categoryName) {
				return null;
			}
			setIsLoading(true);
			const query = `*[_type == "category" && slug.current == "${categoryName}"]{
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
			const response = await sanityClient.fetch(query);
			if (!response) {
				setError(true);
				setIsLoading(false);
			} else {
				setCategory(response);
				setIsLoading(false);
			}
		};

		fetchProducts();
	}, [categoryName]);

	if (isLoading) {
		return <h1>Loading...............</h1>;
	}

	if (error || !category) {
		return <h1>Mordo, nie mam takiego produktu</h1>;
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
				<CategoryItem
					key={item.router}
					name={item.name}
					description={item.description}
					router={item.router}
					imageMobile={item.imageMobile}
					imageDesktop={item.imageDesktop}
					imageTablet={item.imageTablet}
				/>
			))}
			<CategoryLink />
			<AboutUs />
		</div>
	);
};
