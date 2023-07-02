import React, { ChangeEvent, useState, useMemo } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { MessageList } from './MessageList';
import { Socket } from 'socket.io-client';

type Props = { socket: Socket; username: string; room: string };

export const ChatRoom = (props: Props) => {
	type Message = {
		room: string;
		author: string;
		message: string;
		time: string;
	};
	const [currentMessage, setCurrentMessage] = useState<string>('');
	const [messageList, setMessageList] = useState<Message[]>([]);

	const sendMessage = async () => {
		if (currentMessage !== '') {
			const messageData = {
				room: props.room,
				author: props.username,
				message: currentMessage,
				time:
					new Date(Date.now()).getHours() +
					':' +
					new Date(Date.now()).getMinutes(),
			};
			await props.socket.emit('send_message', messageData);
			setMessageList((list) => [...list, messageData]);
		}
		setCurrentMessage('');
	};

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		setCurrentMessage(ev.target.value);
	};

	const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
		if (ev.key === 'Enter') {
			sendMessage();
		}
	};

	useMemo(() => {
		props.socket.on('receive_message', (data) => {
			setMessageList((list) => [...list, data]);
		});
	}, [props.socket]);

	return (
		<div>
			<div className='flex flex-col justify-end w-full h-52'>
				<ScrollToBottom className='w-full overflow-x-hidden'>
					<MessageList messageList={messageList} author={props.username} />
				</ScrollToBottom>
				<div className='flex w-full my-2'>
					<input
						placeholder='Type message'
						type='text'
						value={currentMessage}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
						className='w-4/5 border-2 border-[#D87D4A] focus:outline-none'
					></input>
					<button
						className='w-1/5 bg-[#D87D4A] text-white text-xs  hover:bg-[#fbaf85]'
						onClick={sendMessage}
					>
						SEND
					</button>
				</div>
			</div>
		</div>
	);
};
