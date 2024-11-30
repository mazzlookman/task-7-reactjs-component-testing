import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { ProductFormSection } from '../../../components/sections/ProductFormSection';

describe('ProductFormSection', () => {
    it('renders the form with initial empty values', () => {
        render(<ProductFormSection onSubmit={vi.fn()} />);
        expect(screen.getByLabelText(/Title/i)).toHaveValue('');
        expect(screen.getByLabelText(/Price/i)).toHaveValue(0);
        expect(screen.getByLabelText(/Image URL/i)).toHaveValue('');
    });

    it('calls onSubmit with correct values when form is submitted', () => {
        const mockOnSubmit = vi.fn();
        render(<ProductFormSection onSubmit={mockOnSubmit} />);

        fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Product' } });
        fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '100' } });
        fireEvent.change(screen.getByLabelText(/Image URL/i), { target: { value: 'http://example.com/image.jpg' } });
        fireEvent.click(screen.getByText(/Add Product/i));

        expect(mockOnSubmit).toHaveBeenCalledWith({
            title: 'Test Product',
            price: 100,
            image: 'http://example.com/image.jpg'
        });
    });

    it('resets the form values after submission', () => {
        const mockOnSubmit = vi.fn();
        render(<ProductFormSection onSubmit={mockOnSubmit} />);

        fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Product' } });
        fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '100' } });
        fireEvent.change(screen.getByLabelText(/Image URL/i), { target: { value: 'http://example.com/image.jpg' } });
        fireEvent.click(screen.getByText(/Add Product/i));

        expect(screen.getByLabelText(/Title/i)).toHaveValue('');
        expect(screen.getByLabelText(/Price/i)).toHaveValue(0);
        expect(screen.getByLabelText(/Image URL/i)).toHaveValue('');
    });

    it('does not call onSubmit if title is empty', () => {
        const mockOnSubmit = vi.fn();
        render(<ProductFormSection onSubmit={mockOnSubmit} />);

        fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '100' } });
        fireEvent.change(screen.getByLabelText(/Image URL/i), { target: { value: 'http://example.com/image.jpg' } });
        fireEvent.click(screen.getByText(/Add Product/i));

        expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('does not call onSubmit if price is zero or negative', () => {
        const mockOnSubmit = vi.fn();
        render(<ProductFormSection onSubmit={mockOnSubmit} />);

        fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Product' } });
        fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '0' } });
        fireEvent.change(screen.getByLabelText(/Image URL/i), { target: { value: 'http://example.com/image.jpg' } });
        fireEvent.click(screen.getByText(/Add Product/i));

        expect(mockOnSubmit).not.toHaveBeenCalled();

        fireEvent.change(screen.getByLabelText(/Price/i), { target: { value: '-10' } });
        fireEvent.click(screen.getByText(/Add Product/i));

        expect(mockOnSubmit).not.toHaveBeenCalled();
    });
});