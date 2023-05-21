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
} from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import { CategoryPage } from '../components/Category/CategoryPage';
import { MemoryRouter, Route, Routes, createMemoryHistory } from 'react-router';
import sanityClient from '../client';

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
			await act(async () =>
				renderWithProviders(
					<MemoryRouter initialEntries={['/321312']}>
						<Routes>
							<Route path='/:categoryid' element={<CategoryPage />} />
						</Routes>
					</MemoryRouter>
				)
			);

			setTimeout(() => {
				const loadingTextAfterDelay = screen.getByText(
					'Loading...............'
				);
				expect(loadingTextAfterDelay).toBeInTheDocument();
			}, 1000);
		});
	});

	//if redirects work

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

			const navigate = jest.fn();

			const { getByTestId } = await act(async () =>
				renderWithProviders(
					<MemoryRouter initialEntries={['/321312']}>
						<Routes>
							<Route path='/:categoryid' element={<CategoryPage />} />
						</Routes>
					</MemoryRouter>
				)
			);

			await act(async () => {
				fireEvent.click(getByTestId('redirect-product'));
			});

			expect(navigate).toHaveBeenCalledWith(`/:categoryid/product/1`);
		});
	});
	//if sanity responses with error

	describe('If API call throws an error', () => {
		it('Should display an error message', async () => {
			jest
				.spyOn(sanityClient, 'fetch')
				.mockRejectedValueOnce(new Error('API Error'));

			renderWithProviders(
				<MemoryRouter initialEntries={['/321312']}>
					<Routes>
						<Route path='/:categoryid' element={<CategoryPage />} />
					</Routes>
				</MemoryRouter>
			);

			await act(async () => {
				const errorMessage = await screen.findByText(
					'An error occurred while fetching data.'
				);
				expect(errorMessage).to.exist;
			});
		});
	});
});
