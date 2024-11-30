import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../../components/bases/Button.tsx';
import {vi} from "vitest";

describe('Button component', () => {
  it('renders with the correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the provided className', () => {
    render(<Button label="Click me" onClick={() => {}} className="custom-class" />);
    expect(screen.getByText('Click me')).toHaveClass('custom-class');
  });

  it('renders without className if not provided', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).not.toHaveAttribute('class');
  });
});