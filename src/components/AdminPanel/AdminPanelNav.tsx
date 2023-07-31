import React from 'react';
import { NavLink } from 'react-router-dom';

import { ONLINE_CHATS, RESOLVED_CHATS, ORDERS } from '../Navigation/routes';

export const AdminPanelNav = () => {
	return (
		<div>
			<div className={`flex items-center justify-center bg-[#101010] py-6`}>
				<p className='text-[#FFFFFF] font-bold text-2xl lg:text-2xl tracking-widest uppercase'>
					ADMIN PANEL QUESTION CHAT
				</p>
			</div>
			<div className={`flex items-center justify-center bg-[#101010] py-6`}>
				<div className='flex justify-center items-center w-1/2'>
					<NavLink
						to={ONLINE_CHATS}
						aria-label='Home'
						className='text-xl'
						style={({ isActive }) => ({
							color: isActive ? '#D87D4A' : 'white',
						})}
					>
						ONLINE CHATS
					</NavLink>
				</div>
				<div className='flex justify-center items-center w-1/2'>
					<NavLink
						to={RESOLVED_CHATS}
						aria-label='Home'
						className='text-xl'
						style={({ isActive }) => ({
							color: isActive ? '#D87D4A' : 'white',
						})}
					>
						RESOLVED CHATS
					</NavLink>
				</div>
				<div className='flex justify-center items-center w-1/2'>
					<NavLink
						to={ORDERS}
						aria-label='Home'
						className='text-xl'
						style={({ isActive }) => ({
							color: isActive ? '#D87D4A' : 'white',
						})}
					>
						ORDERS
					</NavLink>
				</div>
			</div>
		</div>
	);
};
