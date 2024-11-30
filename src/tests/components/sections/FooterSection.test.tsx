import { render, screen } from '@testing-library/react';
import FooterSection from '../../../components/sections/FooterSection';

describe("FooterSection", () => {
    it('renders the footer with current year', () => {
        render(<FooterSection />);
        expect(screen.getByText(`© ${new Date().getFullYear()} MyPortfolio. All rights reserved.`)).toBeInTheDocument();
    });

    it('contains a link to GitHub', () => {
        render(<FooterSection />);
        const githubLink = screen.getByText('Github');
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', 'https://github.com/mazzlookman');
    });

    it('contains a link to LinkedIn', () => {
        render(<FooterSection />);
        const linkedInLink = screen.getByText('LinkedIn');
        expect(linkedInLink).toBeInTheDocument();
        expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/mazzlookman');
    });

    it('contains a link to YouTube', () => {
        render(<FooterSection />);
        const youtubeLink = screen.getByText('Youtube');
        expect(youtubeLink).toBeInTheDocument();
        expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/channel/mazzl');
    });

    it('opens links in a new tab', () => {
        render(<FooterSection />);
        const links = screen.getAllByRole('link');
        links.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });
});