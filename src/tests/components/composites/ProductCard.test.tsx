
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductCard } from "../../../components/composites/ProductCard.tsx";

describe("ProductCard", () => {
    it("renders correctly with required props", () => {
        const { getByText, getByAltText } = render(
            <Router>
                <ProductCard id={1} image="image.jpg" title="Product Title" price={100} />
            </Router>
        );
        expect(getByAltText("Product Title")).toBeInTheDocument();
        expect(getByText("Product Title")).toBeInTheDocument();
        expect(getByText("$100.00")).toBeInTheDocument();
    });

    it("renders without description", () => {
        const { queryByText } = render(
            <Router>
                <ProductCard id={1} image="image.jpg" title="Product Title" price={100} />
            </Router>
        );
        expect(queryByText("Description")).not.toBeInTheDocument();
    });

    it("navigates to the correct product page on click", () => {
        const { getByText } = render(
            <Router>
                <ProductCard id={1} image="image.jpg" title="Product Title" price={100} />
            </Router>
        );
        expect(getByText("Product Title").closest("a")).toHaveAttribute("href", "/products/1");
    });

    it("handles missing image gracefully", () => {
        const { getByAltText } = render(
            <Router>
                <ProductCard id={1} image="" title="Product Title" price={100} />
            </Router>
        );
        expect(getByAltText("Product Title")).toHaveAttribute("src", "");
    });
});