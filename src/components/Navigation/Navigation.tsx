import React from 'react';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const Navigation = () => {
	return (
		<>
			<div className='hidden sm:block'>
				<DesktopMenu />
			</div>

			<div className='block sm:hidden'>
				<MobileMenu />
			</div>
		</>
	);
};
