import { Outlet, Navigate } from 'react-router';
import { useSelector } from 'react-redux';

export const AdminPrivateRoutes = () => {
	const isAuthenticated = useSelector(
		(state: any) => state.auth.isAuthenticated
	);

	return isAuthenticated ? <Outlet /> : <Navigate to='adminLogin' />;
};

export default AdminPrivateRoutes;
