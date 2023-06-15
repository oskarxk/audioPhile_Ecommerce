import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import cart from './Cart';
import uiSlice from './CartVisibility';
import type { PreloadedState } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';

enableMapSet();
const rootReducer = combineReducers({ ui: uiSlice.reducer, cm: cart.reducer });

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({ serializableCheck: false }),
	});
};

const store = setupStore();

export default store;
export type AppStore = typeof store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
