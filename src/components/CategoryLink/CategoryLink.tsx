import React from 'react';

import { Link1 } from './Link1';
import { Link2 } from './Link2';
import { Link3 } from './Link3';

export const CategoryLink = () => {
	return (
		<div className='flex justify-center items-center lg:flex-row'>
			<div className='flex flex-col lg:flex-row justify-between items-center my-8 w-3/4'>
				<Link1 />
				<Link2 />
				<Link3 />
			</div>
		</div>
	);
};
