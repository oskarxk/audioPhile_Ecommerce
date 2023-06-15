import React, { useCallback, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/useTypedSelector';
import { Product, cartActions } from '../store/Cart';

export const CartItem = () => {
	const products = useAppSelector((state) => state.cm.products);
	const cartInfo = useAppSelector((state) => state.cm.cartInfo);
	const dispatch = useAppDispatch();

	const removeItemFromCart = useCallback(
		(productName: Product['name']) => {
			dispatch(cartActions.removeItem(productName));
		},
		[dispatch]
	);

	const increaseItem = useCallback((productName: Product['name']) => {
		dispatch(cartActions.increaseItem(productName));
	}, []);

	return (
		<div>
			{cartInfo.size > 0 &&
				Array.from(cartInfo.keys()).map((productName: string) => (
					<div className='w-full my-2' key={`product-${productName}`}>
						{(() => {
							const product = products?.get(productName);
							if (!product) return <h1>Not found</h1>;

							return (
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
											onClick={() => removeItemFromCart(productName)}
										>
											-
										</button>
										<div className='flex justify-center items-center'>
											<p className='px-2 py-1'>{cartInfo.get(productName)}</p>
										</div>
										<button
											className='px-2 py-1 bg-[#F1F1F1] '
											onClick={() => increaseItem(productName)}
										>
											+
										</button>
									</div>
								</div>
							);
						})()}
					</div>
				))}
		</div>
	);
};
