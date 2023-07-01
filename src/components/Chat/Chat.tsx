import React, { useState } from 'react';
import io, { Socket } from 'socket.io-client';
import { ChatRoom } from './ChatRoom';

const socket: Socket = io('http://localhost:4000');

export const Chat = () => {
	// const [msgs, setMessages] = useState<string[]>([]);
	const [isUserJoined, setIsUserJoined] = useState<boolean>(false);
	const [username, setUsername] = useState<string>('');
	const [room, setRoom] = useState<string>('');

	const joinRoom = () => {
		if (username !== '' && room !== '') {
			socket.emit('join_room', room);
			setIsUserJoined(true);
			
		}
	};

	const handleKeyDown = (ev: React.KeyboardEvent<HTMLButtonElement>) => {
		if (ev.key === 'Enter') {
			joinRoom();
		}
	};

	return (
		<div className='fixed right-16 bottom-4 z-10 w-70 bg-white rounded-md flex flex-col px-4 py-5'>
			{isUserJoined ? (
				<ChatRoom socket={socket} username={username} room={room} />
			) : (
				<div>
					<h3 className='pb-2 font-bold tracking-wide'>Join a chat</h3>
					<p className=' text-left text-sm font-semibold'>Username</p>
					<input
						type='text'
						placeholder='John...'
						className='w-full border-2 border-[#D87D4A] focus:outline-none mb-2 rounded-lg placeholder-black pl-2'
						onChange={(event) => {
							setUsername(event.target.value);
						}}
					/>
					<p className='text-left text-sm font-semibold'>Room ID</p>
					<input
						type='text'
						placeholder='999'
						className='w-full border-2 border-[#D87D4A] focus:outline-none mb-2 rounded-lg placeholder-black pl-2'
						onChange={(event) => {
							setRoom(event.target.value);
						}}
					/>
					<button
						onClick={joinRoom}
						onKeyDown={handleKeyDown}
						className='w-full h-8 bg-[#D87D4A] text-white text-xs  hover:bg-[#fbaf85] rounded-lg'
					>
						JOIN
					</button>
				</div>
			)}
		</div>
	);
};
