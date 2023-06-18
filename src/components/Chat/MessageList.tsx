import React, { useState } from 'react';

export const MessageList = () => {
	const [messages, setMessages] = useState([]);

	return (
		<div>
			{messages.map((message, index) => {
				<div key={index}>{message.text}</div>;
			})}
		</div>
	);
};
