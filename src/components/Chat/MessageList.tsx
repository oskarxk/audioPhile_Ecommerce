type Props = {
	msgs: string[];
};

export const MessageList = (props: Props) => {
	return (
		<div>
			{props.msgs.map((message, index) => (
				<div key={index}>{message}</div>
			))}
		</div>
	);
};
