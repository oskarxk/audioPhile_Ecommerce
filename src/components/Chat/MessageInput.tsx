import React, { ChangeEvent, useState } from 'react';

type Props = {
	sendMessage: (message: string) => void;
};

export const MessageInput = (props: Props) => {
	const [inputValue, setInputValue] = useState<string>('');

	const handleClick = () => {
		props.sendMessage(inputValue);
		setInputValue('');
	};

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		setInputValue(ev.target.value);
	};

	const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
		if (ev.key === 'Enter') {
			handleClick();
		}
	};

	return (
		<div className='flex w-full'>
			<input
				placeholder='Type message'
				type='text'
				// onBlur={props.sendMessage}
				value={inputValue}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				className='w-4/5 border-2 border-[#D87D4A] focus:outline-none'
			></input>
			<button
				className='w-1/5 bg-[#D87D4A] text-white text-xs  hover:bg-[#fbaf85]'
				onClick={handleClick}
			>
				SEND
			</button>
		</div>
	);
};
