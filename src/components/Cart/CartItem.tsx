import React, { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/useTypedSelector';
import { cartActions } from '../store/Cart';

export const CartItem = () => {
	const { products } = useAppSelector((state) => state.cm);
	const dispatch = useAppDispatch();

	const removeItemFromCart = useCallback(
		(productId: number) => {
			dispatch(cartActions.removeItem(productId));
		},
		[]
	);

	const increaseItem = useCallback(
		(productId: number) => {
			dispatch(cartActions.increaseItem(productId));
		},
		[]
	);

	return (
		<div>
			{products?.length > 0 &&
				products.map((product) => (
					<div className='w-full my-2' key={`product-${product._id}`}>
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
									onClick={() => removeItemFromCart(product._id)}
								>
									-
								</button>
								<div className='flex justify-center items-center'>
									<p className='px-2 py-1'>{product.quantity}</p>
								</div>
								<button
									className='px-2 py-1 bg-[#F1F1F1] '
									onClick={() => increaseItem(product._id)}
								>
									+
								</button>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};
