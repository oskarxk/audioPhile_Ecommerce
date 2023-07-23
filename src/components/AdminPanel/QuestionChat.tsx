import { ChatRoom } from 'components/Chat/ChatRoom';
import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

type Chat = {
	roomName: string;
	userId: string;
	productName: string;
	productPhoto: string;
};

export const QuestionChat = () => {
	const [chats, setChats] = useState<Chat[]>([]);
	const [room, setRoom] = useState<string>(''); // Dodaj stan dla wybranego pokoju
	const [isAdmin, setIsAdminJoined] = useState(false);

	const username = 'Admin';

	useEffect(() => {
		const socket = io('http://localhost:4000');

		socket.emit('get_all_chats'); // Wysyła zdarzenie, aby pobrać listę wszystkich chatów

		socket.on('all_chats', (allChats: Chat[]) => {
			setChats(allChats);
			console.log(allChats);
		});

		return () => {
			socket.disconnect(); // Rozłącza socket przy odmontowaniu komponentu
		};
	}, []);

	const joinRoom = (room: string) => {
		setRoom(room);
		socket.emit('join_room', room);
		setIsAdminJoined(true);
	};

	const closeChat = (room: string) => {
		socket.emit('leave_room', room);
		setIsAdminJoined(false);
	};

	return (
		<div className='w-full'>
			<div className={`flex items-center justify-center bg-[#101010] py-6`}>
				<p className='text-[#FFFFFF] font-bold text-2xl lg:text-2xl tracking-widest uppercase'>
					ADMIN PANEL QUESTION CHAT
				</p>
			</div>
			<div className='flex justify-between items-start'>
				<div className=' w-3/4 flex flex-col  bg-[#FFFFFF] mx-4 my-4'>
					{chats.map((chat) => (
						<div
							className='w-full flex justify-between bg-[#F1F1F1] rounded-xl my-2'
							key={chat.roomName}
						>
							<div className='flex flex-col justify-center items-center w-3/4'>
								<p className=' text-purple-700'>TICKET {chat.roomName}</p>
								<p className=' text-purple-700'>USER ID: {chat.userId}</p>
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
				</div>
				<div className=' w-1/3 flex flex-col rounded-xl bg-[#F1F1F1] mx-4 my-6'>
					<div className='flex justify-end py-4 px-4'>
						<button onClick={() => closeChat(room)}>
							<AiFillCloseCircle className='text-red-600 text-2xl' />
						</button>
					</div>
					{isAdmin && (
						<ChatRoom socket={socket} username={username} room={room} />
					)}
				</div>
			</div>
		</div>
	);
};
