import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '../../../../components/sections/todo/TodoForm';
import {vi} from "vitest";

describe('TodoForm', () => {
  it('calls onAddTodo with input text when Add button is clicked', () => {
    const onAddTodo = vi.fn();
    render(<TodoForm onAddTodo={onAddTodo} />);

    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(onAddTodo).toHaveBeenCalledWith('New Todo');
    expect(input).toHaveValue('');
  });

  it('does not call onAddTodo when input is empty', () => {
    const onAddTodo = vi.fn();
    render(<TodoForm onAddTodo={onAddTodo} />);

    const button = screen.getByText('Add');
    fireEvent.click(button);

    expect(onAddTodo).not.toHaveBeenCalled();
  });

  it('trims input text before calling onAddTodo', () => {
    const onAddTodo = vi.fn();
    render(<TodoForm onAddTodo={onAddTodo} />);

    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: '   Trimmed Todo   ' } });
    fireEvent.click(button);

    expect(onAddTodo).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('');
  });
});