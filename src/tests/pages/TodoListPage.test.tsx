import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import TodoPage from '../../pages/TodoListPage';
import { addTodo, removeTodo, toggleTodo } from '../../redux/slices/todo-slice';

const mockStore = configureStore([]);
const initialState = {
  todo: {
    todos: [
      { id: 1, text: 'Test Todo 1', completed: false },
      { id: 2, text: 'Test Todo 2', completed: true },
    ],
  },
};

describe('TodoPage', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('renders the TodoPage with todos', () => {
    render(
      <Provider store={store}>
        <Router>
          <TodoPage />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(
      <Provider store={store}>
        <Router>
          <TodoPage />
        </Router>
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add'));

    const actions = store.getActions();
    expect(actions).toContainEqual(addTodo('New Todo'));
  });

  it('toggles a todo', () => {
    render(
      <Provider store={store}>
        <Router>
          <TodoPage />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText('Test Todo 1'));

    const actions = store.getActions();
    expect(actions).toContainEqual(toggleTodo(1));
  });

  it('removes a todo', () => {
    render(
      <Provider store={store}>
        <Router>
          <TodoPage />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getAllByText('Delete')[0]);

    const actions = store.getActions();
    expect(actions).toContainEqual(removeTodo(1));
  });

  it('navigates to the homepage', () => {
    render(
      <Provider store={store}>
        <Router>
          <TodoPage />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText('Go to Homepage'));

    expect(window.location.pathname).toBe('/');
  });
});