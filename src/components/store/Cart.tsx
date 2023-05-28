import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { current, produce } from 'immer';
export type Product = {
	_id: number;
	name: string;
	shortName: string;
	price: number;
	description: string;
	feature1: string;
	feature2: string;
	imageDesktop: string;
	imageMobile: string;
	imageCart: string;
	category: {
		name: string;
	};
};

type ProductState = Product & {
	quantity: number;
};

type State = {
	products: ProductState[];
};

const initialState: State = {
	products: JSON.parse(sessionStorage.getItem('cartItems') || '[]'),
};

const cart = createSlice({
	name: 'cm',
	initialState,
	reducers: {
		addItem: (
			state: State,
			action: PayloadAction<{ quantity: number; product: Product }>
		) => {
			const { quantity, product } = action.payload;
			const existingProduct = state.products.find(
				(item) => item._id === product._id
			);
			if (!existingProduct) {
				state = {
					...state,
					products: [...state.products, { ...product, quantity }],
				};
			} else {
				state = {
					...state,
					products: [
						...state.products.filter((item) => item._id !== product._id),
						{ ...existingProduct, quantity },
					],
				};
			}
			sessionStorage.setItem('cartItems', JSON.stringify(state.products));
			return state;
		},
		addItemToCart: (state: State, action: PayloadAction<number>) => {
			const itemId = action.payload;
			const cartItemIndex: number = state.products.findIndex(
				(item) => item._id === itemId
			);
			const cartItem = state.products[cartItemIndex];
			if (cartItem) {
				cartItem.quantity += 1;
			}
		},
		removeItem: (state: State, action: PayloadAction<number>) => {
			const itemId = action.payload;

			const cartItemIndex: number = state.products.findIndex(
				(item) => item._id === itemId
			);
			const cartItem = state.products[cartItemIndex];
			if (!cartItem) {
				return state;
			}

			const newState = JSON.parse(JSON.stringify(state)) as State;

			if (cartItem.quantity === 1)
				newState.products = newState.products.filter(
					(product) => product._id !== cartItem._id
				);
			else
				newState.products[cartItemIndex] = {
					...cartItem,
					quantity: cartItem.quantity - 1,
				};

			return newState;
		},
		removeAll: produce((state: State) => {
			return {
				state,
				products: [],
			};
		}),
	},
});

export const cartActions = cart.actions;
export default cart;
