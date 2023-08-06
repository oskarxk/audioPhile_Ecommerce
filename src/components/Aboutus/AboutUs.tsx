const photoMan = require('../../Assets/home/mobile/image-best-gear.jpg');

export const AboutUs = () => {
	return (
		<div className='flex justify-center items-center lg:flex-row lg:justify-around'>
			<div className='flex flex-col lg:flex-row justify-center items-center lg:w-3/4'>
				<div className=' w-3/4 my-8 flex flex-col justify-center items-center lg:items-end lg:order-1 lg:ml-2'>
					<img src={photoMan} alt='Man' className='rounded-xl' />
				</div>
				<div className=' w-3/4 flex flex-col justify-between items-center lg:items-start lg:mx-2'>
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
