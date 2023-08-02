import { MessageList } from 'components/Chat/MessageList';
import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import ScrollToBottom from 'react-scroll-to-bottom';
import { io } from 'socket.io-client';

type Chat = {
	roomName: string;
	userId: string;
	productName: string;
	productPhoto: string;
	archivedAt?: string;
};

type Message = {
	room: string;
	author: string;
	message: string;
	time: string;
};

export const HistoricalChat = ({ chat }: { chat: Chat }) => {
	const [messageList, setMessageList] = useState<Message[]>([]);

	useEffect(() => {
		const socket = io('http://localhost:4000', {
			autoConnect: false,
		});

		socket.emit('get_historical_messages', chat.roomName);

		socket.on('historical_messages', (messages: Message[]) => {
            console.log('Pobrane wiadomości:', messages);
			setMessageList(messages);
		});

		return () => {
			socket.off('historical_messages');
		};
	}, [chat.roomName]);

	return (
		<div>
			<div className='flex justify-end items-center bg-[#F1F1F1] rounded-tl-lg rounded-tr-lg overflow-hidden'>
				<button>
					<AiFillCloseCircle className='text-red-600 text-2xl my-4 mx-4' />
				</button>
			</div>
			<div className='flex flex-col justify-end w-full h-72 border-2 border-[#F1F1F1]'>
				<ScrollToBottom className='w-full overflow-x-hidden'>
					<MessageList messageList={messageList} author='Admin' />
				</ScrollToBottom>
			</div>
		</div>
	);
};
