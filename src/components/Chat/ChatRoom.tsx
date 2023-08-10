import React, {
	ChangeEvent,
	useState,
	useEffect,
	useCallback,
	useMemo,
} from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { MessageList } from './MessageList';
import { Socket } from 'socket.io-client';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Message } from 'types/chat';

type Props = {
	socket: Socket;
	username: string;
	room: string;
	isUserJoined: boolean;
	setIsUserJoined: (isJoined: boolean) => void;
	setquestionModal?: (questionModal: boolean) => void;
};

export const ChatRoom = ({
	socket,
	username,
	room,
	setIsUserJoined,
	setquestionModal,
}: Props) => {
	const [currentMessage, setCurrentMessage] = useState<string>('');
	const [messageList, setMessageList] = useState<Message[]>([]);

	const tokenCallback = useSelector((state: any) => state.auth.token);

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

	const isUserAdmin = useMemo(() => {
		return username === 'Admin';
	}, [username]);

	const handleReceiveMsg = useCallback((data: Message) => {
		setMessageList((list) => [...list, data]);
	}, []);

	const handleReceiveHistoricalMessages = useCallback((data: Message[]) => {
		setMessageList(data);
	}, []);

	useEffect(() => {
		socket.on('receive_message', handleReceiveMsg);
		if (isUserAdmin)
			socket.emit(
				'get_historical_messages',
				room,
				handleReceiveHistoricalMessages
			);
		return () => {
			socket.off('receive_message', handleReceiveMsg);
		};
	}, []);

	const closeChat = (room: string) => {
		socket.emit('leave_room', room);
		const userLeftChat = {
			room: room,
			author: 'SYSTEM',
			message: `${username} left the chat`,
			time: new Date().toLocaleTimeString([], {
				hour: '2-digit',
				minute: '2-digit',
			}),
		};
		socket.emit('send_message', userLeftChat);
		socket.emit('delete_chat', room, tokenCallback);
		setIsUserJoined(false);
		if (setquestionModal) {
			setquestionModal(false);
		}
	};

	return (
		<div>
			<div className='flex justify-end items-center bg-[#F1F1F1] rounded-tl-lg rounded-tr-lg overflow-hidden'>
				<button onClick={() => closeChat(room)}>
					<AiFillCloseCircle className='text-red-600 text-2xl my-4 mx-4' />
				</button>
			</div>
			<div className='flex flex-col justify-end w-full h-72 border-2 border-[#F1F1F1]'>
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
