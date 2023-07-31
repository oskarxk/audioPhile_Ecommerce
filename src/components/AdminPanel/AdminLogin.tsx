import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'components/store';
import { adminThunks } from '../store/adminThunks';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const AdminLogin = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [username, setUsername] = useState<string>('');
	const [userpassword, setUserPassword] = useState<string>('');

	const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();
		dispatch(adminThunks({ userName: username, password: userpassword }));
		console.log('Nastapila zmiana state');
	};

	const isAuthenticated = useSelector(
		(state: any) => state.auth.isAuthenticated
	);

	if (isAuthenticated) {
		return <Navigate to='/onlineChats' />;
	}

	return (
		<div className='flex flex-col w-full mb-4'>
			<div className={`flex items-center justify-center bg-[#101010] py-6`}>
				<p className='text-[#FFFFFF] font-bold text-2xl lg:text-2xl tracking-widest uppercase'>
					ADMIN PANEL
				</p>
			</div>
			<div className='flex justify-center items-center'>
				<div className='w-1/2 my-32'>GRAFICZKA</div>
				<form className='w-1/2'>
					<h3 className='pb-2 font-bold tracking-wide'>Join to Admin panel</h3>
					<p className=' text-left text-sm font-semibold'>Username</p>
					<input
						type='text'
						placeholder='John...'
						className='w-full border-2 border-[#D87D4A] focus:outline-none mb-2 rounded-lg placeholder-black pl-2'
						onChange={(event) => {
							setUsername(event.target.value);
						}}
					/>
					<p className='text-left text-sm font-semibold'>Password</p>
					<input
						type='password'
						placeholder='999'
						className='w-full border-2 border-[#D87D4A] focus:outline-none mb-2 rounded-lg placeholder-black pl-2'
						onChange={(event) => {
							setUserPassword(event.target.value);
						}}
					/>
					<button
						onClick={handleSubmit}
						className='w-full h-8 bg-[#D87D4A] text-white text-xs  hover:bg-[#fbaf85] rounded-lg'
					>
						LOG IN
					</button>
				</form>
			</div>
		</div>
	);
};
