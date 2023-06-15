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
	slug: { current: string };
};

// type ProductState = Product & {
// 	quantity: number;
// };

type State = {
	products: Map<Product['name'], Product>;
	cartInfo: Map<Product['name'], number>;
};

// products: JSON.parse(sessionStorage.getItem('cartItems') || '[]'),

const initialState: State = {
	products: new Map(),
	cartInfo: new Map(),
};

const cart = createSlice({
	name: 'cm',
	initialState,
	reducers: {
		addProducts: (state: State, action: PayloadAction<Product[]>) => {
			console.log('P!:', action);
			const products = action.payload;
			products.forEach((product: Product) => {
				state.products.set(product.slug.current, product);
			});

			console.log('AddProducts:', state.products);
		},
		addItem: (
			state: State,
			action: PayloadAction<{ quantity: number; productName: Product['name'] }>
		) => {
			const { quantity, productName } = action.payload;
			if (quantity < 0) return;
			else if (quantity === 0) state.cartInfo.delete(productName);
			else state.cartInfo.set(productName, quantity);

			// const { quantity, product } = action.payload;
			// const existingProduct = state.products.find(
			// 	(item) => item._id === product._id
			// );
			// if (!existingProduct) {
			// 	state = {
			// 		...state,
			// 		products: [...state.products, { ...product, quantity }],
			// 	};
			// } else {
			// 	state = {
			// 		...state,
			// 		products: [
			// 			...state.products.filter((item) => item._id !== product._id),
			// 			{ ...existingProduct, quantity },
			// 		],
			// 	};
			// }
			// sessionStorage.setItem('cartItems', JSON.stringify(state.products));
			// return state;
		},
		increaseItem: (state: State, action: PayloadAction<Product['name']>) => {
			const productName = action.payload;
			const quantity = state.cartInfo.get(productName) || 0;
			state.cartInfo.set(productName, quantity + 1);
			// const itemId = action.payload;
			// const cartItem = state.products.find((item) => item._id === itemId);
			// if (cartItem) {
			// 	cartItem.quantity += 1;
			// }
		},
		removeItem: (state: State, action: PayloadAction<Product['name']>) => {
			const productName = action.payload;

			if (state.cartInfo.has(productName)) {
				const quantity = state.cartInfo.get(productName) as number;
				state.cartInfo.set(productName, quantity - 1);
			} else {
				state.cartInfo.delete(productName);
			}

			// const itemId = action.payload;
			// const cartItemIndex = state.products.findIndex(
			// 	(item) => item._id === itemId
			// );
			// if (cartItemIndex !== -1) {
			// 	const cartItem = state.products[cartItemIndex];
			// 	if (cartItem.quantity > 1) {
			// 		cartItem.quantity -= 1;
			// 	} else {
			// 		state.products.splice(cartItemIndex, 1);
			// 	}
			// }
		},
		removeAll: (state: State) => {
			state.cartInfo.clear();
			// state.products = [];
		},
	},
});

export const cartActions = cart.actions;
export default cart;
