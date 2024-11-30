import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectsCard from "../../../components/composites/ProjectsCard.tsx";

describe("ProjectsCard", () => {
    it("renders correctly with required props", () => {
        const { getByText, getByAltText } = render(
            <Router>
                <ProjectsCard title="Project Title" description="Project Description" imageUrl="image.jpg" linkTo="/projects/1" />
            </Router>
        );
        expect(getByAltText("Project Title")).toBeInTheDocument();
        expect(getByText("Project Title")).toBeInTheDocument();
        expect(getByText("Project Description")).toBeInTheDocument();
    });

    it("renders without description", () => {
        const { queryByText } = render(
            <Router>
                <ProjectsCard title="Project Title" description="" imageUrl="image.jpg" linkTo="/projects/1" />
            </Router>
        );
        expect(queryByText("Project Description")).not.toBeInTheDocument();
    });

    it("navigates to the correct project page on click", () => {
        const { getByText } = render(
            <Router>
                <ProjectsCard title="Project Title" description="Project Description" imageUrl="image.jpg" linkTo="/projects/1" />
            </Router>
        );
        expect(getByText("Project Title").closest("a")).toHaveAttribute("href", "/projects/1");
    });

    it("handles missing image gracefully", () => {
        const { getByAltText } = render(
            <Router>
                <ProjectsCard title="Project Title" description="Project Description" imageUrl="" linkTo="/projects/1" />
            </Router>
        );
        expect(getByAltText("Project Title")).toHaveAttribute("src", "");
    });
});