import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
	isAuthenticated: boolean;
}

const initialState: AuthState = {
	isAuthenticated: false,
};

const adminAuth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		toggle(state) {
			state.isAuthenticated = !state.isAuthenticated;
		},
	},
});

export const authaActions = adminAuth.actions;

export default adminAuth;