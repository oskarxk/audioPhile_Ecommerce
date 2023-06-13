import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../hooks/useTypedSelector';
import { cartActions } from '../store/Cart';
import { CartItem } from './CartItem';

export const Cart = () => {
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const { products } = useAppSelector((state) => state.cm);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const sum = products.reduce((acc, product) => {
			acc += product.price * product.quantity;
			return acc;
		}, 0);
		setTotalPrice(sum);
	}, [products]);

	const removeAllItemsFromCart = useCallback(() => {
		dispatch(cartActions.removeAll());
	}, [dispatch]);

	const removeItemFromCart = useCallback(
		(productId: number) => {
			dispatch(cartActions.removeItem(productId));
		},
		[dispatch]
	);

	const addItemToCart = useCallback(
		(productId: number) => {
			dispatch(cartActions.addItemToCart(productId));
		},
		[dispatch]
	);

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
							onClick={removeAllItemsFromCart}
						>
							Remove All
						</button>
					</div>
				</div>
				{products?.length > 0 &&
					products.map((product) => (
						// <div className='w-full my-2' key={`product-${product._id}`}>
						// 	<div className='flex justify-between items-center w-full'>
						// 		<div className='w-1/4'>
						// 			<img src={product.imageCart} alt='Zdjecie produktu' />
						// 		</div>
						// 		<div className='flex flex-col justify-center w-2/4 mx-2'>
						// 			<p className='font-bold text-left'>{product.shortName}</p>
						// 			<p className='text-left text-[#808080]'>{`$ ${product.price}`}</p>
						// 		</div>
						// 		<div className='flex justify-center items-center w-1/4 h-1/2 bg-[#F1F1F1]'>
						// 			<button
						// 				className='px-2 py-1 bg-[#F1F1F1]'
						// 				onClick={() => removeItemFromCart(product._id)}
						// 			>
						// 				-
						// 			</button>
						// 			<div className='flex justify-center items-center'>
						// 				<p className='px-2 py-1'>{product.quantity}</p>
						// 			</div>
						// 			<button
						// 				className='px-2 py-1 bg-[#F1F1F1] '
						// 				onClick={() => addItemToCart(product._id)}
						// 			>
						// 				+
						// 			</button>
						// 		</div>
						// 	</div>
						// </div>
						<CartItem
							key={`product-${product._id}`}
							product={product}
							removeItemFromCart={removeItemFromCart}
							addItemToCart={addItemToCart}
							quantity={product.quantity}
						/>
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
