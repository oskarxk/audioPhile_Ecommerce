jest.mock("../client");
import { screen, act } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import { CategoryPage } from "../components/Category/CategoryPage";
import { MemoryRouter, Route, Routes } from "react-router";
import sanityClient from "../client";

describe("Category Page tests", () => {
  describe("If category doesn't exist", () => {
    it("should show error page", () => {
      renderWithProviders(<CategoryPage categoryid={1909} />);

      const element = screen.getByText("Mordo, nie mam takiego produktu");

      expect(element).toBeInTheDocument();
    });
  });
  describe("If category does exist", () => {
    it("should show correct products number", async () => {
      sanityClient.fetch.mockResolvedValue({
        name: "Example category",
        categories: [
          {
            name: "Example product",
            description: "Product",
            router: "/product/1",
            imageDesktop: "url",
            imageTablet: "url2",
            imageMobile: "url2",
          },
        ],
      });

      const {container} = await act(async () =>
        renderWithProviders(
          <MemoryRouter initialEntries={["/321312"]}>
            <Routes>
              <Route path="/:categoryid" element={<CategoryPage />} />
            </Routes>
          </MemoryRouter>
        )
      );

      expect(sanityClient.fetch).toHaveBeenCalledTimes(1)
      const elements = container.getElementsByClassName("lg:my-8");
      const elementsLength = elements.length;
      expect(elementsLength).toBe(1);
    });
  });

	//check for loading
	//if redirects work
	//if sanity responses with error
});
