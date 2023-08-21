import React from 'react';
import { AiOutlineDesktop } from 'react-icons/ai';

export const DesktopNotification = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<AiOutlineDesktop className='text-4xl my-4 mx-4' />
            <p className='text-2xl font-bold'>Dostęp dla Admina dostępny tylko dla użytkowników komputerów typu Desktop</p>
		</div>
	);
};
