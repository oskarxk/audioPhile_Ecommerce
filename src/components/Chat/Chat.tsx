import React, { useEffect } from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import io from 'socket.io';

const socket = io('https://localhost:3000');

export const Chat = () => {
	useEffect(() => {
		socket.emit(`join`, { userId: 'user123' });
		//Nasluchuj zdarzen  message z serwera
		socket.on('message', (message: string) => {
			//obsluga przychodzacych wiadomosci
		});
		return () => {
			socket.disconnect(); // zwolnij połączenie webSocket przy odnotowaniu komponentu
		};
	}, []);

	const sendMessage = (message: string) => {
		socket.emit('message', message);
	};

	return (
		<div>
			<MessageList />
			<MessageInput />
		</div>
	);
};
