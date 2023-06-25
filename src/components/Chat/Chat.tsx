import React, { useEffect, useState } from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

export const Chat = () => {
	const [msgs, setMessages] = useState<string[]>([]);
	useEffect(() => {
		socket.emit(`join`, { userId: 'user123' });
		//Nasluchuj zdarzen  message z serwera
		socket.on('message', (messages: string[]) => {
			setMessages(messages);
		});
		return () => {
			socket.disconnect(); // zwolnij połączenie webSocket przy odnotowaniu komponentu
		};
	}, []);

	const sendMessage = (message: string) => {
		if (message) socket.emit('message', message);
	};

	return (
		<div className='fixed right-16 bottom-4 z-10 w-60 h-max bg-white rounded-md flex flex-col px-4 py-5'>
			<h2 className='pb-2 font-bold tracking-wide'>Messenger</h2>
			<MessageInput sendMessage={sendMessage} />
			<MessageList msgs={msgs} />
		</div>
	);
};
