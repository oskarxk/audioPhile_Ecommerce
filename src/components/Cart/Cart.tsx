import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../hooks/useTypedSelector';
import { cartActions } from '../store/Cart';
import { CartItem } from './CartItem';

export const Cart = () => {
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const cartInfo = useAppSelector((state) => state.cm.cartInfo);
	const products = useAppSelector((state) => state.cm.products);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const productNames = Array.from(cartInfo.keys());

		const sum = productNames.reduce((acc, productName) => {
			const product = products.get(productName);
			const quantity = cartInfo.get(productName);
			if (product && quantity) acc += product.price * quantity;
			return acc;
		}, 0);
		setTotalPrice(sum);
	}, [products, cartInfo]);

	const removeAllItemsFromCart = useCallback(() => {
		dispatch(cartActions.removeAll());
	}, [dispatch]);

	return (
		<div className='w-full bg-slate-500/25 h-screen absolute z-10  flex justify-end'>
			<div className=' w-80 h-max bg-white mx-48 my-10 rounded-md flex flex-col px-5 py-5'>
				<div className='flex'>
					<div className='w-1/2 text-left'>
						<p className='font-bold tracking-wide'>CART ({cartInfo.size})</p>
					</div>
					<div className='w-1/2 text-right'>
						<button
							className='text-[#808080] underline underline-offset-1 text-sm'
							onClick={removeAllItemsFromCart}
						>
							Remove All
						</button>
					</div>
				</div>
				<CartItem />
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
