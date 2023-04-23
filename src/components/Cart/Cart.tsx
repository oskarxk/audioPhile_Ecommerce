import React from 'react';
import { useAppSelector } from '../hooks/useTypedSelector';


import { cartActions } from '../store/Cart';
import { useAppDispatch } from '../hooks/useTypedSelector';
type Props = {};

export const Cart = (props: Props) => {
	const { products } = useAppSelector((state) => state.cm);
	const dispatch = useAppDispatch();

	return (
		<div className='w-1/2 bg-cyan-400 h-full'>
			<p className='text-black'>Siemaaaaaaaa</p>
		</div>
	);
};
