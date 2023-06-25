import { createSlice } from '@reduxjs/toolkit';

type State = {
	chatIsVisible: boolean;
};

const initialState: State = {
	chatIsVisible: false,
};

const chSlice = createSlice({
	name: 'ch',
	initialState,
	reducers: {
		toggle(state) {
			state.chatIsVisible = !state.chatIsVisible;
		},
	},
});

export const chActions = chSlice.actions;

export default chSlice;
