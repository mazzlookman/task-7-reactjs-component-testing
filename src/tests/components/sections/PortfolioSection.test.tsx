import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PortfolioSection from "../../../components/sections/PortfolioSection";
import {vi} from "vitest";

// Mock ProjectsCard
vi.mock("../../../components/composites/ProjectsCard", () => {
    return {
        default: function MockProjectsCard({ title, description, imageUrl, linkTo }: any) {
            return (
                <div data-testid="projects-card">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <img src={imageUrl} alt={`${title} image`} />
                    <a href={linkTo}>Go to {title}</a>
                </div>
            );
        },
    };
});

describe("PortfolioSection Component", () => {
    it("renders the section title correctly", () => {
        render(
            <MemoryRouter>
                <PortfolioSection />
            </MemoryRouter>
        );
        const sectionTitle = screen.getByText("Mini Projects");
        expect(sectionTitle).toBeInTheDocument();
    });

    it("renders all portfolio items", () => {
        render(
            <MemoryRouter>
                <PortfolioSection />
            </MemoryRouter>
        );

        const portfolioItems = [
            "Website Portfolio",
            "TodoList App with Redux",
            "Products from Fake Store API",
        ];

        portfolioItems.forEach((title) => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });

        const cards = screen.getAllByTestId("projects-card");
        expect(cards.length).toBe(portfolioItems.length);
    });

    it("renders each project with correct details", () => {
        render(
            <MemoryRouter>
                <PortfolioSection />
            </MemoryRouter>
        );

        const portfolioDetails = [
            {
                title: "Website Portfolio",
                description: "Deskripsi singkat tentang project Website Portfolio.",
                imageUrl: "src/assets/images/portfolio.png",
                linkTo: "#home",
            },
            {
                title: "TodoList App with Redux",
                description: "Deskripsi singkat tentang project TodoList App with Redux.",
                imageUrl: "src/assets/images/todolist.png",
                linkTo: "/todolist",
            },
            {
                title: "Products from Fake Store API",
                description: "Deskripsi singkat tentang project Products from Fake Store API.",
                imageUrl: "src/assets/images/products-list.png",
                linkTo: "/products",
            },
        ];

        portfolioDetails.forEach(({ title, description, imageUrl, linkTo }) => {
            expect(screen.getByText(title)).toBeInTheDocument();
            expect(screen.getByText(description)).toBeInTheDocument();
            expect(screen.getByAltText(`${title} image`)).toHaveAttribute("src", imageUrl);
            expect(screen.getByText(`Go to ${title}`)).toHaveAttribute("href", linkTo);
        });
    });
});
