import { ChatRoom } from 'components/Chat/ChatRoom';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';

const socket = io('http://localhost:4000', {
	autoConnect: false,
});

type Chat = {
	roomName: string;
	userId: string;
	productName: string;
	productPhoto: string;
};

export const QuestionChat = () => {
	const [chats, setChats] = useState<Chat[]>([]);
	const [room, setRoom] = useState<string>(''); // Dodaj stan dla wybranego pokoju
	const [isUserJoined, setIsUserJoined] = useState<boolean>(false);
	const tokenCallback = useSelector((state: any) => state.auth.token);

	const username = 'Admin';

	useEffect(() => {
		socket.connect();
		socket.emit('get_all_chats', tokenCallback); // Wysyła zdarzenie, aby pobrać listę wszystkich chatów

		socket.on('all_chats', (allChats: Chat[]) => {
			console.log('AllChats: ', allChats);
			setChats(allChats);
		});

		return () => {
			socket.disconnect(); // Rozłącza socket przy odmontowaniu komponentu
		};
	}, []);

	const joinRoom = (room: string) => {
		setRoom(room);
		socket.emit('join_room', room);
		setIsUserJoined(true);
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
				</div>
				<div className=' w-1/3 flex flex-col rounded-xl mx-4 my-6'>
					{isUserJoined && (
						<ChatRoom
							socket={socket}
							username={username}
							room={room}
							setIsUserJoined={setIsUserJoined}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
