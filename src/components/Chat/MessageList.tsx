import { Message } from 'types/chat';

type Props = {
	messageList: Message[];
	author: string;
};

export const MessageList = (props: Props) => {
	return (
		<div>
			{props.messageList.map((message, index) => {
				const containerClass =
					message.author === props.author
						? 'items-end mr-4'
						: 'items-start ml-4';
				const messageClass =
					message.author === props.author
						? 'bg-green-600 text-white items-end mr-4'
						: 'bg-blue-500 text-white items-start ml-4';
				return (
					<div
						key={index}
						className={`flex flex-col w-full my-2 ${containerClass}`}
					>
						<div className={`flex rounded-lg text-left ${messageClass}`}>
							<p className='px-4 py-2 break-all'>{message.message}</p>
						</div>
						<div
							className={`flex flex-col justify-start items-start my-2 text-sm text-gray-500 ${containerClass}`}
						>
							<p>{message.time}</p>
							<p>{message.author}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};
