import { render, screen, fireEvent } from '@testing-library/react';
import { InputWithLabel } from '../../../components/bases/InputWithLabel.tsx';
import { describe, it, expect, vi } from 'vitest';

describe('InputWithLabel Component', () => {
    it('renders the input field with the correct label', () => {
        render(<InputWithLabel id={"name"} label="Name" value="" onChange={() => {}} />);
        expect(screen.getByText('Name')).toBeInTheDocument();
    });

    it('renders the input field with the correct value', () => {
        render(<InputWithLabel id={"name"} label="Name" value="Iron Man" onChange={() => {}} />);
        expect(screen.getByDisplayValue('Iron Man')).toBeInTheDocument();
    });

    it('calls onChange when the input value changes', () => {
        const handleChange = vi.fn();
        render(<InputWithLabel id={"name"} label="Name" value="" onChange={handleChange} />);

        const input = screen.getByLabelText('Name');
        fireEvent.change(input, { target: { value: 'Iron Man' } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});
