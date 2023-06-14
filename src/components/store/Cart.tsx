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
			console.log(state);
			sessionStorage.setItem('cartItems', JSON.stringify(state.products));
			return state;
		},
		increaseItem: (state: State, action: PayloadAction<number>) => {
			const itemId = action.payload;
			const cartItem = state.products.find((item) => item._id === itemId);

			if (cartItem) {
				cartItem.quantity += 1;
			}
		},
		removeItem: (state: State, action: PayloadAction<number>) => {
			const itemId = action.payload;
			const cartItemIndex = state.products.findIndex(
				(item) => item._id === itemId
			);

			if (cartItemIndex !== -1) {
				const cartItem = state.products[cartItemIndex];
				if (cartItem.quantity > 1) {
					cartItem.quantity -= 1;
				} else {
					state.products.splice(cartItemIndex, 1);
				}
			}
		},
		removeAll: (state: State) => {
			state.products = [];
		},
	},
});

export const cartActions = cart.actions;
export default cart;
