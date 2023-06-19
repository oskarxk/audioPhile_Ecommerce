import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import { prettyDOM } from '@testing-library/react';
import { CategoryPage } from '../components/Category/CategoryPage';
import Router from 'react-router';

jest.mock('react-router', () => ({
	...jest.requireActual('react-router'),
	useParams: jest.fn(),
}));

describe('Category Page tests', () => {
	describe("If category doesn't exist", () => {
		it('should show error page', () => {
			renderWithProviders(<CategoryPage categoryid={1909} />);

			const element = screen.getByText('Mordo, nie mam takiego produktu');

			expect(element).toBeInTheDocument();
		});
	});
	describe('If category does exist', () => {
		const sanityMock = jest.mock('@sanity/client', () => {
			return function sanity() {
				return {
					fetch: () =>
						jest.fn().mockResolvedValue({
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
						}),
				};
			};
		});

		it('should show correct products number', () => {
			jest.spyOn(Router, 'useParams').mockReturnValue({ categoryid: '1' });
			const { container } = renderWithProviders(
				<CategoryPage categoryid={1909} />
			);
			console.log(prettyDOM(container));
			const elements = container.getElementsByClassName('lg:my-8');
			const elementsLength = elements.length;
			expect(elementsLength).toBe(1);
		});
	});
});
