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
		<div className='flex flex-col justify-between items-center my-2 lg:flex-row lg:justify-around lg:my-8'>
			<div className=' w-3/4 flex flex-col justify-center items-center rounded-xl lg:flex-row lg:justify-between'>
				<div className='flex justify-center items-center rounded-xl pt-8 lg:w-2/5 odd:order-1 even:order-2'>
					<img
						src={imageMobile}
						srcSet={`${imageMobile} 1024w, ${imageDesktop} 1280w`}
						alt='speakers'
						className='mt-2 rounded-xl'
					/>
				</div>
				<div className='lg:flex lg:flex-col lg:justify-center lg:items-start lg:w-2/5 odd:order-2 even:order-1'>
					<p className=' px-2 lg:px-0 py-4 lg:text-xl text-[#fbaf85] tracking-widest'>
						NEW PRODUCT
					</p>
					<p className='text-[#101010] text-2xl lg:text-4xl lg:text-left font-bold pb-4 lg:w-1/2 uppercase'>
						{name}
					</p>
					<p className='text-[#808080] text-sm lg:text-left lg:w-4/5'>
						{description}
					</p>
					<Link to={`./${router}`}>
						<button className='h-25 w-1/2 lg:w-full my-4 py-2 lg:px-4 bg-[#D87D4A] text-white hover:bg-[#fbaf85]'>
							SEE PRODUCT
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
