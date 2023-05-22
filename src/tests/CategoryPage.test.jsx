jest.mock('../client');

import {
	screen,
	act,
	waitFor,
	getByText,
	fireEvent,
	getElementsByClassName,
	click,
	getByTestId,
	useNavigate,
	prettyDOM,
} from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import { CategoryPage } from '../components/Category/CategoryPage';
import { MemoryRouter, Route, Routes } from 'react-router';
import sanityClient from '../client';
import { createMemoryHistory } from 'history';

describe('Category Page tests', () => {
	describe("If category doesn't exist", () => {
		it('should show error page', () => {
			renderWithProviders(<CategoryPage categoryid={1909} />);
			const element = screen.getByText('Mordo, nie mam takiego produktu');
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
			const { container } = await act(async () =>
				renderWithProviders(
					<MemoryRouter initialEntries={['/321312']}>
						<Routes>
							<Route path='/:categoryid' element={<CategoryPage />} />
						</Routes>
					</MemoryRouter>
				)
			);
			expect(sanityClient.fetch).toHaveBeenCalledTimes(1);
			const elements = container.getElementsByClassName('lg:my-8');
			const elementsLength = elements.length;
			expect(elementsLength).toBe(1);
		});
	});
	//check for loading
	describe('If loading text works', () => {
		it('should show for a while loading text', async () => {
			renderWithProviders(
				<MemoryRouter initialEntries={['/321312']}>
					<Routes>
						<Route path='/:categoryid' element={<CategoryPage />} />
					</Routes>
				</MemoryRouter>
			);
			await waitFor(() => {
				expect(screen.getByText('Loading...............')).toBeInTheDocument();
			});
		});
	});
	if redirects work
	describe('If link redirects correctly', () => {
		it('Should redirects correctly', async () => {
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
			const history = createMemoryHistory();
			history.push = jest.fn();
			// const navigate = jest.fn();
			// const { getByTestId } = await act(async () =>
			await act(async () => {
				renderWithProviders(
					<MemoryRouter initialEntries={['/321312']}>
						<Routes>
							<Route path='/:categoryid' element={<CategoryPage />} />
						</Routes>
					</MemoryRouter>
				);
			});
			const element = screen.getByTestId('redirect-product');
			console.log('Element:', element);
			expect(history.push).toHaveBeenCalledWith(`/321312/product/1`);
			await fireEvent.click(screen.getByTestId('redirect-product'));
			// await waitFor(() => {
			// });
			// );
			// await act(async () => {
			// 	fireEvent.click(getByTestId('redirect-product'));
			// });
		});
	});
	if sanity responses with error
	describe('If API call throws an error', () => {
		it('Should display an error message', async () => {
			sanityClient.fetch.mockRejectedValue('Error!');
			//wyrenderuj
			await act(async () => {
				const errorMessage = await screen.findByText(
					'An error occurred while fetching data.'
				);
				expect(errorMessage).to.exist;
			});
		});
	});
});
