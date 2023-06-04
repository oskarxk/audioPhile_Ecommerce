import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
	cartIsVisible: boolean;
};

const initialState: State = {
	cartIsVisible: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggle(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
	},
});

export const uiActions = uiSlice.actions;

export default uiSlice;
