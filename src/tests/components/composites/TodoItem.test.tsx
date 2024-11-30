import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../../../components/composites/TodoItem.tsx';
import {vi} from "vitest";

describe('TodoItem', () => {
  const defaultProps = {
    key: '1',
    text: 'Sample Todo',
    completed: false,
    onToggle: vi.fn(),
    onDelete: vi.fn(),
  };

  it('renders the todo item with text', () => {
    render(<TodoItem {...defaultProps} />);
    expect(screen.getByText('Sample Todo')).toBeInTheDocument();
  });

  it('calls onToggle when checkbox is clicked', () => {
    render(<TodoItem {...defaultProps} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(defaultProps.onToggle).toHaveBeenCalled();
  });

  it('calls onDelete when delete button is clicked', () => {
    render(<TodoItem {...defaultProps} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(defaultProps.onDelete).toHaveBeenCalled();
  });

  it('applies line-through style when completed is true', () => {
    render(<TodoItem {...defaultProps} completed={true} />);
    expect(screen.getByText('Sample Todo')).toHaveClass('line-through');
  });

  it('does not apply line-through style when completed is false', () => {
    render(<TodoItem {...defaultProps} completed={false} />);
    expect(screen.getByText('Sample Todo')).not.toHaveClass('line-through');
  });
});