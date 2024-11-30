import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Title } from '../../../components/bases/Title.tsx';

describe('Title component', () => {
    it('renders the title correctly', () => {
        const { getByText } = render(<Title title="Test Title" />);
        expect(getByText('Test Title')).toBeInTheDocument();
    });

    it('applies the correct class names', () => {
        const { container } = render(<Title title="Test Title" />);
        const h3Element = container.querySelector('h3');
        expect(h3Element).toHaveClass('font-bold text-xl mb-2 text-primary');
    });

    it('renders an empty title without crashing', () => {
        const { container } = render(<Title title="" />);
        const h3Element = container.querySelector('h3');
        expect(h3Element).toBeInTheDocument();
        expect(h3Element).toHaveTextContent('');
    });
});