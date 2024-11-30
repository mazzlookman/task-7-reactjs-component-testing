import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import React from "react";

describe("HomePage", () => {
    const renderWithProviders = (ui: React.ReactElement) => {
        return render(<Router>{ui}</Router>);
    };

    it("renders NavbarSection", () => {
        const { getByTestId } = renderWithProviders(<HomePage />);
        expect(getByTestId("navbar-section")).toBeInTheDocument();
    });

    it("renders HeroSection", () => {
        const { getByTestId } = renderWithProviders(<HomePage />);
        expect(getByTestId("hero-section")).toBeInTheDocument();
    });

    it("renders PortfolioSection", () => {
        const { getByTestId } = renderWithProviders(<HomePage />);
        expect(getByTestId("portfolio-section")).toBeInTheDocument();
    });

    it("renders ContactSection", () => {
        const { getByTestId } = renderWithProviders(<HomePage />);
        expect(getByTestId("contact-section")).toBeInTheDocument();
    });

    it("renders FooterSection", () => {
        const { getByTestId } = renderWithProviders(<HomePage />);
        expect(getByTestId("footer-section")).toBeInTheDocument();
    });
});