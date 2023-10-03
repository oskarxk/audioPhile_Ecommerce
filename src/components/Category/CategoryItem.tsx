import React from 'react';
import { Link } from 'react-router-dom';

type ProductItemProps = {
	name: string;
	description: string;
	router: string;
	imageMobile: string;
	imageDesktop: string;
	imageTablet: string;
};

export const CategoryItem = ({
	name,
	description,
	router,
	imageMobile,
	imageDesktop,
	imageTablet,
}: ProductItemProps) => {
	return (
		<div className='flex flex-col justify-between items-center my-2 lg:flex-row lg:justify-between lg:my-8 w-full lg:w-3/4 lg:odd:flex-row-reverse'>
			<div className='flex justify-center items-center rounded-xl pt-8 w-full lg:w-2/5'>
				<img
					src={imageMobile}
					srcSet={`${imageMobile} 1024w, ${imageDesktop} 1280w`}
					alt='speakers'
					className='w-3/4 lg:w-full mt-2 rounded-xl'
				/>
			</div>
			<div className='flex flex-col justify-center lg:justify-center items-center lg:items-start lg:w-2/5'>
				<p className=' px-2 lg:px-0 py-4 lg:text-xl text-[#fbaf85] tracking-widest'>
					NEW PRODUCT
				</p>
				<p className='text-[#101010] text-2xl lg:text-4xl lg:text-left font-bold pb-4 lg:w-1/2 uppercase'>
					{name}
				</p>
				<p className='text-[#808080] text-sm mx-4 lg:text-left w-3/4 lg:w-4/5 lg:mx-0'>
					{description}
				</p>
				<Link to={`./${router}`}>
					<button className='h-25 w-full px-4 my-4 py-2 lg:px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
						SEE PRODUCT
					</button>
				</Link>
			</div>
		</div>
	);
};
