import React from 'react';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const Navigation = () => {
	return (
		<>
			<div className='hidden sm:block w-full z-50'>
				<DesktopMenu />
			</div>

			<div className='block sm:hidden w-full z-50'>
				<MobileMenu />
			</div>
		</>
	);
};
