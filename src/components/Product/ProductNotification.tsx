import React, { useEffect, useState } from 'react';

type Props = {
	quantity: number;
	name: string;
	imageCart: string;
	isVisible: boolean;
};

export const ProductNotification = ({
	quantity,
	name,
	imageCart,
	isVisible,
}: Props) => {
	const [quantityInternal, setQuantityInternal] = useState(1);

	useEffect(() => {
		if (!isVisible) {
			setQuantityInternal(quantity);
		}
	}, [quantity, isVisible]);

	if (!isVisible) return <></>;

	return (
		<div className='fixed lg:bottom-4 lg:right-4 p-4 rounded-md bg-green-500 text-white shadow-lg w-max animate-pulse'>
			<div className='flex items-center space-x-2'>
				{imageCart && (
					<img src={imageCart} alt={name} className='w-8 h-8 rounded-full' />
				)}
				<div>
					<p>
						{quantityInternal}x {name}
					</p>
					<p>Added to cart</p>
				</div>
			</div>
		</div>
	);
};
