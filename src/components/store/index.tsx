import { configureStore } from '@reduxjs/toolkit';
import cart from './Cart';
import uiSlice from './CartVisibility';

const store = configureStore({
	reducer: { ui: uiSlice.reducer, cm: cart.reducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
