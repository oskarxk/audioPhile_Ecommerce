import React, { useState } from 'react';

type Props = {};

export const MessageInput = (props: Props) => {
	const [inputValue, setInputValue] = useState('');

	const handleMessageSend = () => {
		setInputValue('');
	};

	return <div>...</div>;
};
