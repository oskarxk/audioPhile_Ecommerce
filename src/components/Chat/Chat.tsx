import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { ChatRoom } from './ChatRoom';

const socket = io('http://localhost:4000', {
	autoConnect: false,
});

type Product = {
	_id: number;
	name: string;
	shortName: string;
	price: number;
	description: string;
	feature1: string;
	feature2: string;
	imageDesktop: string;
	imageMobile: string;
	imageCart: string;
	photoGalleryDesktop1: string;
	photoGalleryDesktop2: string;
	photoGalleryDesktop3: string;
	photoGalleryMobile1: string;
	photoGalleryMobile2: string;
	photoGalleryMobile3: string;
	contents: {
		name: string;
		quantity: number;
	}[];
	category: {
		name: string;
	};
};

type Props = { product: Product | undefined };

export const Chat = ({ product }: Props) => {
	const [isUserJoined, setIsUserJoined] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('');
	const [room, setRoom] = useState('');
	const roomRef = useRef('');

	const productName = product?.name;
	const productPhoto = product?.imageCart;

	const joinRoom = () => {
		if (username !== '' && username !== 'Admin') {
			const randomNumber = Math.floor(Math.random() * 900) + 100;
			const generatedRoom = `#${randomNumber} ${product?.name}`;
			setRoom(generatedRoom);
			roomRef.current = generatedRoom;
			socket.emit('join_room', generatedRoom, productName, productPhoto);
			setIsUserJoined(true);
		}
	};

	const handleKeyDown = (ev: React.KeyboardEvent<HTMLButtonElement>) => {
		if (ev.key === 'Enter') {
			joinRoom();
		}
	};

	useEffect(() => {
		socket.connect();
	}, []);

	return (
		<div className='flex flex-col w-full lg:w-3/4 bottom-4 bg-white rounded-md  py-5'>
			{isUserJoined ? (
				<ChatRoom
					socket={socket}
					username={username}
					room={room}
					isUserJoined={isUserJoined}
					setIsUserJoined={setIsUserJoined}
				/>
			) : (
				<form>
					<p className=' text-left text-sm font-semibold'>Name</p>
					<input
						type='text'
						placeholder='John...'
						className='w-full border-2 border-[#D87D4A] focus:outline-none mb-2 rounded-lg placeholder-black pl-2'
						onChange={(event) => {
							setUsername(event.target.value);
						}}
					/>
					<button
						onClick={joinRoom}
						onKeyDown={handleKeyDown}
						className='w-full h-8 bg-[#D87D4A] text-white text-xs  hover:bg-[#fbaf85] rounded-lg'
					>
						Join a live chat
					</button>
				</form>
			)}
		</div>
	);
};
