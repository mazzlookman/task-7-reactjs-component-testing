import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../../../../components/sections/todo/TodoList';
import {vi} from "vitest";

describe('TodoList', () => {
  const todos = [
    { id: 1, text: 'First Todo', completed: false },
    { id: 2, text: 'Second Todo', completed: true },
  ];

  it('renders all todos', () => {
    render(<TodoList todos={todos} onToggleTodo={vi.fn()} onDeleteTodo={vi.fn()} />);
    expect(screen.getByText('First Todo')).toBeInTheDocument();
    expect(screen.getByText('Second Todo')).toBeInTheDocument();
  });

  it('calls onToggleTodo when a todo is toggled', () => {
    const onToggleTodo = vi.fn();
    render(<TodoList todos={todos} onToggleTodo={onToggleTodo} onDeleteTodo={vi.fn()} />);
    fireEvent.click(screen.getByText('First Todo'));
    expect(onToggleTodo).toHaveBeenCalledWith(1);
  });

  it('calls onDeleteTodo when a todo is deleted', () => {
    const onDeleteTodo = vi.fn();
    render(<TodoList todos={todos} onToggleTodo={vi.fn()} onDeleteTodo={onDeleteTodo} />);
    fireEvent.click(screen.getAllByRole('button', { name: /delete/i })[0]);
    expect(onDeleteTodo).toHaveBeenCalledWith(1);
  });

  it('renders no todos when the list is empty', () => {
    render(<TodoList todos={[]} onToggleTodo={vi.fn()} onDeleteTodo={vi.fn()} />);
    expect(screen.queryByText('First Todo')).not.toBeInTheDocument();
    expect(screen.queryByText('Second Todo')).not.toBeInTheDocument();
  });
});