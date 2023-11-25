import { createAsyncThunk } from '@reduxjs/toolkit';
import { authaActions } from './adminAuth';
import io from 'socket.io-client';

const socket = io('https://full-backend-audio.onrender.com:4000', {
	autoConnect: false,
});

interface LoginData {
	userName: string;
	password: string;
}

export const adminThunks = createAsyncThunk(
	'auth/authenticateUser',
	async (loginData: LoginData, { dispatch }) => {
		socket.connect();
		socket.emit(
			'login',
			loginData.userName,
			loginData.password,
			(resp: string | boolean) => {
				if (!resp) {
					return;
				} else {
					dispatch(authaActions.toggle(resp as string));
				}
			}
		);
	}
);

export const logoutAdmin = createAsyncThunk('auth/logoutAdmin', async (_, { dispatch }) => {
	socket.emit('logout', (callback: boolean) => {
	  if (callback) {
		dispatch(authaActions.toggle('')); // Resetujemy stan autoryzacji po wylogowaniu
	  } else {
		console.log('Error');
	  }
	});
  });
