import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
	isAuthenticated: boolean;
	token?: string;
}

const initialState: AuthState = {
	isAuthenticated: false,
	token: undefined,
};

const adminAuth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		toggle(state, action: PayloadAction<string>) {
			state.isAuthenticated = !state.isAuthenticated;
			state.token = action.payload;
		},
	},
});

export const authaActions = adminAuth.actions;

export default adminAuth;
