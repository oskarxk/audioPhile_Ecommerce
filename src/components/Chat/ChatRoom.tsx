import React, { ChangeEvent, useState, useEffect, useCallback } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { MessageList } from './MessageList';
import { Socket } from 'socket.io-client';
import { AiFillCloseCircle } from 'react-icons/ai';

type Props = {
	socket: Socket;
	username: string;
	room: string;
	setIsUserJoined: (isJoined: boolean) => void;
};

export const ChatRoom = ({
	socket,
	username,
	room,
	setIsUserJoined,
}: Props) => {
	type Message = {
		room: string;
		author: string;
		message: string;
		time: string;
	};
	const [currentMessage, setCurrentMessage] = useState<string>('');
	const [messageList, setMessageList] = useState<Message[]>([]);
	const [isAdminJoined, setIsAdminJoined] = useState<boolean>(false);

	const sendMessage = async () => {
		if (currentMessage !== '') {
			const messageData = {
				room: room,
				author: username,
				message: currentMessage,
				time: new Date().toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit',
				}),
			};
			await socket.emit('send_message', messageData);
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

	const handleReceiveMsg = useCallback((data: Message) => {
		if (data.author === 'Admin') {
			setIsAdminJoined(true);
		}
		setMessageList((list) => [...list, data]);
	}, []);

	const closeChat = (room: string) => {
		socket.emit('leave_room', room);
		setIsUserJoined(false);
	};

	useEffect(() => {
		socket.on('receive_message', handleReceiveMsg);
		return () => {
			socket.off('receive_message', handleReceiveMsg);
		};
	}, []);

	useEffect(() => {
		if (isAdminJoined) {
			const adminJoinMessage = {
				room: room,
				author: 'SYSTEM',
				message: 'Admin joined the chat',
				time: new Date().toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit',
				}),
			};
			setMessageList((list) => [...list, adminJoinMessage]);
		}
	}, [isAdminJoined, room]);

	return (
		<div>
			<div className='flex justify-end bg-[#F1F1F1] rounded-tl-lg rounded-tr-lg overflow-hidden'>
				<button onClick={() => closeChat(room)}>
					<AiFillCloseCircle className='text-red-600 text-2xl my-4 mx-4' />
				</button>
			</div>
			<div className='flex flex-col justify-end w-full h-52 border-2 border-[#F1F1F1]'>
				<ScrollToBottom className='w-full overflow-x-hidden'>
					<MessageList messageList={messageList} author={username} />
				</ScrollToBottom>
				<div className='flex w-full'>
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
