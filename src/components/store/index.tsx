import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sessionStorageSyncMiddleware } from './sessionStorageSyncMiddleware';

import cart from './Cart';
import uiSlice from './CartVisibility';
import chSlice from './ChatVisibility';
import adminAuth from './adminAuth';
import type { PreloadedState } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	ui: uiSlice.reducer,
	ch: chSlice.reducer,
	cm: cart.reducer,
	auth: adminAuth.reducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (applyMiddleware) =>
			applyMiddleware().concat(sessionStorageSyncMiddleware),
	});
};

const store = setupStore();

export default store;
export type AppStore = typeof store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
