import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
	products: [],
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
			console.log(state);
			return state;
		},
		addItemToCart: (state: State, action: PayloadAction<number>) => {
			const itemId = action.payload;
			const cartItem = state.products.find((item) => item._id === itemId);
			if (!cartItem) {
				return state;
			}
			const cartItemRest = state.products.filter((item) => item._id !== itemId);
			state = {
				...state,
				products: [
					...cartItemRest,
					{ ...cartItem, quantity: cartItem.quantity + 1 },
				],
			};
			return state;
		},
		removeItem: (state: State, action: PayloadAction<number>) => {
			const itemId = action.payload;
			const cartItem = state.products.find((item) => item._id === itemId);
			if (!cartItem) {
				return state;
			}
			const cartItemRest = state.products.filter((item) => item._id !== itemId);
			state = {
				...state,
				products: [
					...cartItemRest,
					...(cartItem.quantity === 1
						? []
						: [{ ...cartItem, quantity: cartItem.quantity - 1 }]),
				],
			};
			return state;
		},
		removeAll: (state: State) => {
			state = {
				...state,
				products: [],
			};
			return state;
		},
	},
});

export const cartActions = cart.actions;
export default cart;
