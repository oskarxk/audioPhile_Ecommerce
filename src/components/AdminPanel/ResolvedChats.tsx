import React, { useEffect, useState } from 'react';
import { AdminPanelNav } from './AdminPanelNav';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';
import { HistoricalChat } from './HistoricalChat';
import ScrollToBottom from 'react-scroll-to-bottom';
import { TbMoodEmpty } from 'react-icons/tb';
import { Chat } from 'types/chat';

const socket = io('http://localhost:4000', {
	autoConnect: false,
});

export const ResolvedChats = () => {
	const [archivedChats, setArchivedChats] = useState<Chat[]>([]);
	const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

	const [isAdminJoin, setisAdminJoin] = useState<boolean>(false);

	const tokenCallback = useSelector((state: any) => state.auth.token);

	useEffect(() => {
		socket.connect();

		socket.emit('get_archived_chats', tokenCallback);

		socket.on('archived_chats', (allArchivedChats) => {
			console.log(allArchivedChats);
			setArchivedChats(allArchivedChats);
		});
		return () => {
			socket.disconnect();
		};
	}, []);

	const joinHistoricalChat = (roomName: string) => {
		const chat = archivedChats.find((chat) => chat.roomName === roomName);
		setSelectedChat(chat || null);
		setisAdminJoin(true);
	};

	return (
		<div className='w-full'>
			<AdminPanelNav />
			<div className='flex justify-between items-start'>
				{archivedChats.length < 1 ? (
					<div className='flex justify-center items-center'>
						<TbMoodEmpty className='text-black text-9xl my-4 mx-4' />
						<p className='text-black text-center font-bold'>
							Actual number of chats is currently: {archivedChats.length}
						</p>
					</div>
				) : (
					<ScrollToBottom className='w-full h-96 overflow-x-hidden'>
						{archivedChats.map((chat) => (
							<div
								className='w-full flex justify-between bg-[#F1F1F1] rounded-xl mb-2'
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
										onClick={() => joinHistoricalChat(chat.roomName)}
									>
										Join chat
									</button>
								</div>
							</div>
						))}
					</ScrollToBottom>
				)}
				<div className='w-1/3 rounded-xl my-4 mx-4'>
					{isAdminJoin && selectedChat !== null && (
						<HistoricalChat chat={selectedChat} setisAdminJoin={setisAdminJoin}/>
					)}
				</div>
			</div>
		</div>
	);
};
