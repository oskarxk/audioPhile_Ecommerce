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
import { ProductCard } from 'components/Products/ProductCard';
import { MemoryRouter, Route, Router, Routes } from 'react-router';
import sanityClient from '../../src/client';

const helperRenderFunction = async () =>
	renderWithProviders(
		<MemoryRouter initialEntries={['/id']}>
			<Routes>
				<Route path='/:id' element={<ProductCard />} />
			</Routes>
		</MemoryRouter>
	);

describe('Product Page tests', () => {
	describe("If product doesn't exist", () => {
		it('Should show error page', async () => {
			sanityClient.fetch.mockRejectedValue({
				message: 'Error 404!',
				status: 404,
			});

			await act(() => helperRenderFunction());
			const element = screen.getByText('Mordo, nie mam takiego produktu.');
			expect(element).toBeInTheDocument();
		});
	});

	describe('If product exist', () => {
		it('Should show product page', async () => {
			sanityClient.fetch.mockResolvedValue({
				_id: 997,
				name: 'Speaker',
				shortName: 'spk',
				price: 999,
				description: 'A lovely speaker',
				feature1: 'Fancy cables',
				feature2: 'Fancy case',
				imageDesktop: 'url',
				imageMobile: 'url1',
				imageCart: 'url2',
				contents: [
					{
						name: 'Speaker',
						quantity: 10,
					},
				],
				category: [
					{
						name: 'speakers',
					},
				],
			});

			
			helperRenderFunction();
			await waitFor(() => {
				expect(screen.getByText('A lovely speaker')).toBeInTheDocument();
			});
		});
	});
	describe('If product page exist', () => {
		it('Should show loading text for a while', async () => {
			helperRenderFunction();
			await waitFor(() => {
				expect(screen.getByText('Loading...............')).toBeInTheDocument();
			});
		});
	});
    describe('If add to cart works', () => {
        it('should allow us to add product to cart', async () => {
            sanityClient.fetch.mockResolvedValue({
				_id: 997,
				name: 'Speaker',
				shortName: 'spk',
				price: 999,
				description: 'A lovely speaker',
				feature1: 'Fancy cables',
				feature2: 'Fancy case',
				imageDesktop: 'url',
				imageMobile: 'url1',
				imageCart: 'url2',
				contents: [
					{
						name: 'Speaker',
						quantity: 10,
					},
				],
				category: [
					{
						name: 'speakers',
					},
				],
			});



        })
    })
});
