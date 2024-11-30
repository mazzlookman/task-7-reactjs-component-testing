import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Price } from "../../../components/bases/Price.tsx";

describe("Price component", () => {
    it("renders the price with two decimal places", () => {
        const { getByText } = render(<Price price={19.99} />);
        expect(getByText("$19.99")).toBeInTheDocument();
    });

    it("renders the price with one decimal place", () => {
        const { getByText } = render(<Price price={19.9} />);
        expect(getByText("$19.90")).toBeInTheDocument();
    });

    it("renders the price with no decimal places", () => {
        const { getByText } = render(<Price price={20} />);
        expect(getByText("$20.00")).toBeInTheDocument();
    });

    it("renders the price with more than two decimal places", () => {
        const { getByText } = render(<Price price={19.999} />);
        expect(getByText("$20.00")).toBeInTheDocument();
    });

    it("renders the price with a large number", () => {
        const { getByText } = render(<Price price={123456789.99} />);
        expect(getByText("$123456789.99")).toBeInTheDocument();
    });
});