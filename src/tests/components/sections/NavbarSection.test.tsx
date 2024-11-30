import { render, screen, fireEvent } from "@testing-library/react";
import NavbarSection from "../../../components/sections/NavbarSection";

describe("NavbarSection Component", () => {
    it("renders the logo and links correctly for desktop", () => {
        render(<NavbarSection />);

        // Periksa navigasi desktop
        const desktopNav = screen.getByLabelText("Desktop Navigation");
        expect(desktopNav).toBeInTheDocument();
        expect(desktopNav).toHaveClass("hidden md:flex");
    });

    it("toggles the menu visibility on mobile", () => {
        render(<NavbarSection />);

        // Periksa navigasi mobile
        const mobileNav = screen.getByLabelText("Mobile Navigation");
        expect(mobileNav).toHaveClass("hidden");

        // Klik toggle button untuk membuka menu
        const toggleButton = screen.getByRole("button", { hidden: true });
        fireEvent.click(toggleButton);
        expect(mobileNav).toHaveClass("block");

        // Klik toggle button lagi untuk menutup menu
        fireEvent.click(toggleButton);
        expect(mobileNav).toHaveClass("hidden");
    });

    it("hides the menu when a link is clicked", () => {
        render(<NavbarSection />);

        // Klik toggle button untuk membuka menu
        const toggleButton = screen.getByRole("button", { hidden: true });
        fireEvent.click(toggleButton);

        // Klik salah satu link
        const homeLink = screen.getByLabelText("Home", { selector: "a" });
        fireEvent.click(homeLink);

        // Periksa bahwa navigasi mobile kembali tersembunyi
        const mobileNav = screen.getByLabelText("Mobile Navigation");
        expect(mobileNav).toHaveClass("hidden");
    });
});
