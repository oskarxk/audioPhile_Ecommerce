import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useTypedSelector';
import { Link } from 'react-router-dom';

export const PaymentFinalization = () => {
	const { products } = useAppSelector((state) => state.cm);
	const navigate = useNavigate();

	return (
		<div className='flex flex-col w-full justify-center items-center bg-[#F1F1F1] py-4'>
			<div className='flex w-full items-center justify-center py-4'>
				<button
					onClick={() => navigate(-1)}
					className='w-3/4 text-[#808080] text-sm text-left'
				>
					Go Back
				</button>
			</div>
			<div className='flex w-3/4 items-start justify-between bg-[#F1F1F1] '>
				<div className='w-8/12 bg-white rounded-md px-8 py-8'>
					<div className='w-full'>
						<p className='text-black text-left text-3xl font-bold mb-8'>
							CHECKOUT
						</p>
					</div>
					<div className='w-full flex flex-col'>
						<div>
							<p className='text-[#D87D4A] text-left text-sm font-bold my-4'>
								BILLING DETAILS
							</p>
						</div>
						<div className='flex w-full justify-between'>
							<div className='w-5/12	'>
								<div className='flex flex-col'>
									<p className='text-left font-semibold py-2'>Name</p>
									<input
										className='py-4 border-2 border-[#F1F1F1] rounded-md outline-none'
										type='text'
									/>
								</div>
								<div className='flex flex-col'>
									<p className='text-left font-semibold py-2'>Phone Number</p>
									<input
										className='py-4 border-2 border-[#F1F1F1] rounded-md outline-none'
										type='number'
										name=''
										id=''
									/>
								</div>
							</div>
							<div className='w-5/12	'>
								<div className='flex flex-col'>
									<p className='text-left font-semibold py-2'>Email Adress</p>
									<input
										className='py-4 border-2 border-[#F1F1F1] rounded-md outline-none'
										type='email'
										name=''
										id=''
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='w-full flex flex-col'>
						<div>
							<p className='text-[#D87D4A] text-left text-sm font-bold my-4'>
								SHIPPING INFO
							</p>
						</div>
						<div className='flex flex-col w-full justify-between'>
							<div className='w-full'>
								<div className='flex flex-col'>
									<p className='text-left font-semibold py-2'>Address</p>
									<input
										className='py-4 border-2 border-[#F1F1F1] rounded-md outline-none'
										type='text'
									/>
								</div>
							</div>
						</div>
						<div className='flex w-full justify-between'>
							<div className='w-5/12	'>
								<div className='flex flex-col'>
									<p className='text-left font-semibold py-2'>ZIP Code</p>
									<input
										className='py-4 border-2 border-[#F1F1F1] rounded-md outline-none'
										type='text'
									/>
								</div>
								<div className='flex flex-col'>
									<p className='text-left font-semibold py-2'>Country</p>
									<input
										className='py-4 border-2 border-[#F1F1F1] rounded-md outline-none'
										type='text'
									/>
								</div>
							</div>
							<div className='w-5/12	'>
								<div className='flex flex-col'>
									<p className='text-left font-semibold py-2'>City</p>
									<input
										className='py-4 border-2 border-[#F1F1F1] rounded-md outline-none'
										type='text'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='w-3/12 h-max bg-white rounded-md flex flex-col px-5 py-5'>
					<div className='flex'>
						<div className='w-1/2 text-left'>
							<p className='font-bold tracking-wide'>SUMMARY</p>
						</div>
					</div>
					{products &&
						products.map((product) => (
							<div className='w-full my-2'>
								<div className='flex justify-between items-center w-full'>
									<div className='w-1/4'>
										<img src={product.imageCart} alt='Zdjecie produktu' />
									</div>
									<div className='flex flex-col justify-center w-2/4 mx-2'>
										<p className='font-bold text-left'>{product.shortName}</p>
										<p className='text-left text-[#808080]'>{`$ ${product.price}`}</p>
									</div>
									<div className='flex justify-center items-center w-1/4 h-1/2 bg-[#F1F1F1]'>
										<div className='flex justify-center items-center'>
											<p className='px-2 py-1'>{product.quantity}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					<div className='flex my-6'>
						<div className='w-1/2 text-left'>
							<p className='text-[#808080]'>Total:</p>
						</div>
						<div className='w-1/2 text-right'>
							<p className='font-bold tracking-wide'>XXX</p>
						</div>
					</div>
					<div className='w-full'>
						<Link to={`/payment`}>
							<button className='bg-[#D87D4A] text-white w-full py-2 font-bold text-sm'>
								CHECKOUT
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
