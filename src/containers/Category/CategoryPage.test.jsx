jest.mock('../client');

import {
	screen,
	act,
	waitFor,
	fireEvent,
	prettyDOM,
} from '@testing-library/react';
import { renderWithProviders } from 'utils/test-utils';
import { CategoryPage } from 'components/Category/CategoryPage';
import { MemoryRouter, Route, Router, Routes } from 'react-router';
import sanityClient from '../../src/client';

const helperRenderFunction = async () =>
	renderWithProviders(
		<MemoryRouter initialEntries={['/categoryId']}>
			<Routes>
				<Route path='/:categoryid' element={<CategoryPage />} />
			</Routes>
		</MemoryRouter>
	);

describe('Category Page tests', () => {
	describe("If category doesn't exist", () => {
		it('should show error page', async () => {
			sanityClient.fetch.mockRejectedValue({
				message: 'Error 404!',
				status: 404,
			});

			await act(() => helperRenderFunction());
			const element = screen.getByText('Mordo, nie mam takiego produktu.');
			expect(element).toBeInTheDocument();
		});
	});
	describe('If category does exist', () => {
		it('should show correct products number', async () => {
			sanityClient.fetch.mockResolvedValue({
				name: 'Example category',
				categories: [
					{
						name: 'Example product',
						description: 'Product',
						router: '/product/1',
						imageDesktop: 'url',
						imageTablet: 'url2',
						imageMobile: 'url2',
					},
				],
			});
			const { container } = await act(() => helperRenderFunction());
			expect(sanityClient.fetch).toHaveBeenCalledTimes(1);
			const elements = container.getElementsByClassName('lg:my-8');
			const elementsLength = elements.length;
			expect(elementsLength).toBe(1);
		});
	});
	//check for loading
	describe('If loading text works', () => {
		it('should show for a while loading text', async () => {
			helperRenderFunction();
			await waitFor(() => {
				expect(screen.getByText('Loading...............')).toBeInTheDocument();
			});
		});
	});
	// if redirects work
	describe('If link redirects correctly', () => {
		it('Should redirects correctly', async () => {
			sanityClient.fetch.mockResolvedValue({
				name: 'Example category',
				categories: [
					{
						name: 'Example product',
						description: 'Product',
						router: 'product/1',
						imageDesktop: 'url',
						imageTablet: 'url2',
						imageMobile: 'url2',
					},
				],
			});

			await act(async () => {
				renderWithProviders(
					<MemoryRouter initialEntries={['/categoryId']}>
						<Routes>
							<Route path='/:categoryid' element={<CategoryPage />} />
							<Route
								path='/:categoryid/product/:id'
								element={<div>Product page</div>}
							/>
						</Routes>
					</MemoryRouter>
				);
			});

			fireEvent.click(screen.getByTestId('redirect-product'));
			expect(screen.getByText('Product page')).toBeInTheDocument();
		});
	});
	// if sanity responses with error
	describe('If API call throws an error', () => {
		it('Should display an error message', async () => {
			sanityClient.fetch.mockRejectedValue({
				message: 'Error 405!',
				status: 405,
			});

			await act(() => helperRenderFunction());
			expect(screen.getByText('Error 405!')).toBeInTheDocument();
		});
	});
});
