import React, { ChangeEvent, useEffect, useState } from 'react';
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

	const sendMessage = (ev: ChangeEvent<HTMLInputElement>) => {
		if (ev?.currentTarget?.value)
			socket.emit('message', ev.currentTarget.value);
	};

	return (
		<div>
			<MessageList msgs={msgs} />
			<MessageInput sendMessage={sendMessage} />
		</div>
	);
};
