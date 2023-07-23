import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserData } from 'components/AdminPanel/authApi';
import { authaActions } from './adminAuth';

interface LoginData {
	userName: string;
	password: string;
}

export const adminThunks = createAsyncThunk(
	'auth/authenticateUser',
	async (loginData: LoginData, { dispatch }) => {
		try {
			const userData = await fetchUserData();

			if (
				userData &&
				loginData.userName === userData.userName &&
				loginData.password === userData.password
				) {
					dispatch(authaActions.toggle());
					console.log('dane sie zgadzaja');
			} else {
				console.log('Dupa blada koleżko');
			}
		} catch (error) {
			console.error(
				'Wystąpił błąd podczas uwierzytelniania użytkownika:',
				error
			);
		}
	}
);
