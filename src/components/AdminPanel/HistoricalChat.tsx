import { MessageList } from 'components/Chat/MessageList';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Chat } from 'types/chat';

type HistoricalChatProps = {
	chat: Chat;
	setisAdminJoin: (isAdminJoin: boolean) => void;
};

export const HistoricalChat = ({
	chat,
	setisAdminJoin,
}: HistoricalChatProps) => {
	return (
		<div>
			<div className='flex justify-end items-center bg-[#F1F1F1] rounded-tl-lg rounded-tr-lg overflow-hidden'>
				<button onClick={() => setisAdminJoin(false)}>
					<AiFillCloseCircle className='text-red-600 text-2xl my-4 mx-4' />
				</button>
			</div>
			<div className='flex flex-col justify-end w-full h-72 border-2 border-[#F1F1F1]'>
				<ScrollToBottom className='w-full overflow-x-hidden'>
					<MessageList messageList={chat.messages} author='Admin' />
				</ScrollToBottom>
			</div>
		</div>
	);
};
