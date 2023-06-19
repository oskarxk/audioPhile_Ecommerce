import React, { ChangeEvent } from 'react';

type Props = {
	sendMessage: (ev: ChangeEvent<HTMLInputElement>) => void;
};

export const MessageInput = (props: Props) => {
	return (
		<div>
			<input
				placeholder='Type message'
				type='text'
				onBlur={props.sendMessage}
			></input>
		</div>
	);
};
