import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Product = {
	_id: number;
	name: string;
	price: number;
	description: string;
	feature1: string;
	feature2: string;
	imageDesktop: string;
	imageMobile: string;
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
			state,
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
				existingProduct.quantity = quantity + existingProduct.quantity;
			}
		},
		removeItem: (state, action: PayloadAction<number>) => {
			const itemId = action.payload;
			const cartItem = state.products.find((item) => item._id === itemId);
			if (!cartItem) {
				return state;
			}
			if (cartItem.quantity === 1) {
				state.products = [];
			} else {
				cartItem.quantity = cartItem.quantity - 1;
			}
		},
	},
});

export const cartActions = cart.actions;
export default cart;
