import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../../components/bases/Input.tsx';
import {vi} from "vitest";

describe('Input component', () => {
  it('renders with the correct value', () => {
    render(<Input value="test value" onChange={() => {}} />);
    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onChange handler when value changes', () => {
    const handleChange = vi.fn();
    render(<Input value="" onChange={handleChange} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders with the correct placeholder', () => {
    render(<Input value="" onChange={() => {}} placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  it('applies the correct className', () => {
    render(<Input value="" onChange={() => {}} className="custom-class" />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('custom-class');
  });

  it('renders without crashing when optional props are not provided', () => {
    render(<Input value="" onChange={() => {}} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
});