import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import TodoLayout from '../../../components/layouts/TodoLayout.tsx';
import {vi} from "vitest";

const mockStore = configureMockStore();

describe('TodoLayout Component', () => {
  it('should render the component correctly', () => {
    // Mock Redux store
    const store = mockStore({
      todo: {
        todos: [
          { id: 1, text: 'Learn React', completed: false },
          { id: 2, text: 'Learn Redux', completed: true },
        ],
      },
    });

    // Mock props
    const mockTodos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Learn Redux', completed: true },
    ];
    const mockOnAddTodo = vi.fn();
    const mockOnToggleTodo = vi.fn();
    const mockOnDeleteTodo = vi.fn();

    render(
        <Provider store={store}>
          <TodoLayout
              todos={mockTodos}
              onAddTodo={mockOnAddTodo}
              onToggleTodo={mockOnToggleTodo}
              onDeleteTodo={mockOnDeleteTodo}
          />
        </Provider>
    );

    // Assert header is rendered
    expect(screen.getByText(/Todo List App/i)).toBeInTheDocument();

    // Assert todo count is correct
    expect(screen.getByText(/Total todo: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Selesai: 1/i)).toBeInTheDocument();

    // Assert TodoForm and TodoList are rendered
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument(); // Assuming a button in TodoForm
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn Redux/i)).toBeInTheDocument();
  });

  it('should handle interactions with props', () => {
    const store = mockStore({
      todo: {
        todos: [],
      },
    });

    const mockTodos = [
      { id: 1, text: 'Learn React', completed: false },
    ];
    const mockOnAddTodo = vi.fn();
    const mockOnToggleTodo = vi.fn();
    const mockOnDeleteTodo = vi.fn();

    render(
        <Provider store={store}>
          <TodoLayout
              todos={mockTodos}
              onAddTodo={mockOnAddTodo}
              onToggleTodo={mockOnToggleTodo}
              onDeleteTodo={mockOnDeleteTodo}
          />
        </Provider>
    );

    // Simulate adding a todo
    screen.getByRole('button', { name: /add/i }).click();
    expect(mockOnAddTodo).toBeCalledTimes(0);

    // Simulate toggling a todo
    screen.getByText(/Learn React/i).click();
    expect(mockOnToggleTodo).toHaveBeenCalledWith(1);

    // Simulate deleting a todo
    screen.getByRole('button', { name: /delete/i }).click();
    expect(mockOnDeleteTodo).toHaveBeenCalledWith(1);
  });
});
