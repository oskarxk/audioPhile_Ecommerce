import React from 'react';
import { useAppSelector } from '../hooks/useTypedSelector';
import { cartActions } from '../store/Cart';
import { useAppDispatch } from '../hooks/useTypedSelector';
import { Link } from 'react-router-dom';
type Props = {};

export const Cart = (props: Props) => {
	const { products } = useAppSelector((state) => state.cm);
	const dispatch = useAppDispatch();

	let totalPrice = 0;

	products.forEach((product) => {
		totalPrice += product.price;
	});

	return (
		<div className='w-full bg-slate-500/25 h-screen absolute z-10  flex justify-end'>
			<div className=' w-80 h-max bg-white mx-48 my-10 rounded-md flex flex-col px-5 py-5'>
				<div className='flex'>
					<div className='w-1/2 text-left'>
						<p className='font-bold tracking-wide'>CART ({products.length})</p>
					</div>
					<div className='w-1/2 text-right'>
						<button
							className='text-[#808080] underline underline-offset-1 text-sm'
							onClick={() => dispatch(cartActions.removeAll())}
						>
							Remove All
						</button>
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
									<button
										className='px-2 py-1 bg-[#F1F1F1]'
										onClick={() =>
											dispatch(cartActions.removeItem(product._id))
										}
									>
										-
									</button>
									<div className='flex justify-center items-center'>
										<p className='px-2 py-1'>{product.quantity}</p>
									</div>
									<button
										className='px-2 py-1 bg-[#F1F1F1] '
										onClick={() =>
											dispatch(cartActions.addItemToCart(product._id))
										}
									>
										+
									</button>
								</div>
							</div>
						</div>
					))}
				<div className='flex my-6'>
					<div className='w-1/2 text-left'>
						<p className='text-[#808080]'>Total:</p>
					</div>
					<div className='w-1/2 text-right'>
						<p className='font-bold tracking-wide'>$ {totalPrice}</p>
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
	);
};
