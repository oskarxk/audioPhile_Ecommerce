type Props = {
	msgs: string[];
};

export const MessageList = (props: Props) => {
	return (
		<div>
			{props.msgs.map((message, index) => (
				<div key={index} className='py-2 text-center'>
					{message}
				</div>
			))}
		</div>
	);
};
