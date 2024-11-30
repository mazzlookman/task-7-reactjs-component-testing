import { render, screen } from '@testing-library/react';
import HeroSection from '../../../components/sections/HeroSection';

describe('HeroSection', () => {
    it('renders the HeroSection component', () => {
        render(<HeroSection />);
        expect(screen.getByText('Mohammad Lukman Aqib')).toBeInTheDocument();
    });

    it('displays the correct image with alt text', () => {
        render(<HeroSection />);
        const image = screen.getByAltText('Mohammad Lukman Aqib');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'src/assets/avatars/moon-knight.jpg');
    });

    it('displays the correct skills', () => {
        render(<HeroSection />);
        const skills = ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML & CSS'];
        skills.forEach(skill => {
            expect(screen.getByText(skill)).toBeInTheDocument();
        });
    });
});