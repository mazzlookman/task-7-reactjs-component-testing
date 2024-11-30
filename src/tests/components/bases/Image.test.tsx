import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Image } from "../../../components/bases/Image.tsx";

describe("Image component", () => {
    it("renders correctly with given props", () => {
        const { getByAltText } = render(<Image src="test.jpg" alt="Test Image" />);
        const imgElement = getByAltText("Test Image");
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", "test.jpg");
    });
});

