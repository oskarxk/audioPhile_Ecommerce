
export const sessionStorageSyncMiddleware = (store) => (next) => (action) => {
	const result = next(action);
	const { products } = store.getState().cm;

	sessionStorage.setItem('cartItems', JSON.stringify(products));

	return result;
};
