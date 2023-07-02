type Message = {
	room: string;
	author: string;
	message: string;
	time: string;
};

type Props = {
	messageList: Message[];
	author: string;
};

export const MessageList = (props: Props) => {
	return (
		<div>
			{props.messageList.map((message, index) => (
				<div
					key={index}
					className={`flex flex-col w-full my-2 ${
						message.author === props.author ? 'items-end' : 'items-start'
					}`}
				>
					<div
						className={`flex rounded-lg text-left ${
							message.author === props.author
								? 'bg-green-600 text-white items-end'
								: 'bg-blue-500 text-white items-start'
						}`}
					>
						<p className='px-4 py-2 break-all'>{message.message}</p>
					</div>
					<div
						className={`flex flex-col justify-start items-start mt-2 text-sm text-gray-500 ${
							message.author === props.author ? 'items-end' : 'items-start'
						}`}
					>
						<p>{message.time}</p>
						<p>{message.author}</p>
					</div>
				</div>
			))}
		</div>
	);
};
