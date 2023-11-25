import React, { useEffect, useState } from 'react';
import { ChatRoom } from 'components/Chat/ChatRoom';
import { AdminPanelNav } from './AdminPanelNav';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { TbMoodEmpty } from 'react-icons/tb';
import ScrollToBottom from 'react-scroll-to-bottom';
import 'animate.css';
import { Chat } from 'types/chat';

const socket = io('https://full-backend-audio.onrender.com:4000', {
	autoConnect: false,
});

export const OnlineChats = () => {
	const [chats, setChats] = useState<Chat[]>([]);
	const [room, setRoom] = useState<string>('');
	const [isUserJoined, setIsUserJoined] = useState<boolean>(false);
	const tokenCallback = useSelector((state: any) => state.auth.token);

	const username = 'Admin';

	useEffect(() => {
		socket.connect();
		socket.emit('get_all_chats', tokenCallback);

		socket.on('all_chats', (allChats: Chat[]) => {
			setChats(allChats);
		});

		return () => {
			socket.disconnect();
		};
	}, []);

	const joinRoom = (room: string) => {
		setRoom(room);
		socket.emit('join_room', room);

		const adminJoinMessage = {
			room: room,
			author: 'SYSTEM',
			message: 'Admin joined the chat',
			time: new Date().toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			}),
		};
		socket.emit('send_message', adminJoinMessage);

		setIsUserJoined(true);
	};

	return (
		<div className='w-full'>
			<AdminPanelNav />
			<div className='flex justify-between items-start'>
				{chats.length < 1 ? (
					<div className='flex justify-center items-center'>
						<TbMoodEmpty className='text-black text-9xl my-4 mx-4' />
						<p className='text-black text-center font-bold'>
							Actual number of chats is currently: {chats.length}
						</p>
					</div>
				) : (
					<ScrollToBottom className='w-full h-96 overflow-x-hidden'>
						{chats.map((chat) => (
							<div
								className='w-full flex justify-between bg-[#F1F1F1] rounded-xl mb-2 animate__animated animate__backInLeft animate__slow'
								key={chat.roomName}
							>
								<div className='flex flex-col justify-center items-center w-3/4'>
									<p className=' text-black'>TICKET {chat.roomName}</p>
									<p className=' text-black'>USER ID: {chat.userId}</p>
								</div>
								<div className='flex flex-col justify-center items-center w-1/4 my-2'>
									<img src={chat.productPhoto} alt={chat.productName} />
									<button
										className=' uppercase font-bold text-l text-[#FFFFFF] bg-red-600 px-2 py-2 rounded-xl'
										onClick={() => joinRoom(chat.roomName)}
									>
										Join chat
									</button>
								</div>
							</div>
						))}
					</ScrollToBottom>
				)}
				<div className=' w-1/3 rounded-xl my-4 mx-4'>
					{isUserJoined && (
						<ChatRoom
							socket={socket}
							username={username}
							room={room}
							setIsUserJoined={setIsUserJoined}
							isUserJoined={isUserJoined}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
