import { configureStore } from '@reduxjs/toolkit';
import cart from './Cart';

const store = configureStore({
	reducer: { cartMechanism: cart.reducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
