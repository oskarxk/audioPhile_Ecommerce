import React from 'react';

type Props = {
	infoMessage: string;
};

export const OrderNotification = ({ infoMessage }: Props) => {
	return (
		<div className='fixed lg:bottom-4 lg:right-4 p-4 rounded-md bg-red-600 text-white shadow-lg w-max animate-pulse'>
			<div className='flex items-center space-x-2'>
				<p>{infoMessage}</p>
			</div>
		</div>
	);
};
