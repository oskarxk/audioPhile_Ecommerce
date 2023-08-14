import { createSlice } from '@reduxjs/toolkit';

type chatState = {
	chatIsVisible: boolean;
};

const initialState: chatState = {
	chatIsVisible: false,
};

const chatSlice = createSlice({
	name: 'ch',
	initialState,
	reducers: {
		toggle(state) {
			state.chatIsVisible = !state.chatIsVisible;
		},
	},
});

export const chActions = chatSlice.actions;

export default chatSlice;
