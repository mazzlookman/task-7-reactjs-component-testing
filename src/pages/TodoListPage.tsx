import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import TodoLayout from '../components/layouts/TodoLayout';
import { addTodo, removeTodo, toggleTodo } from '../redux/slices/todo-slice';
import { Link } from 'react-router-dom';

const TodoPage: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
        {/* <NavbarSection /> */}
        <div className='min-h-screen bg-gray-100'>
            <div className="flex justify-center items-center flex-col pt-8 container sm:w-full px-8 md:w-2/3">
                <span className='self-start mb-4 pl-2 text-primary-light hover:text-primary-dark'><Link to='/'>Go to Homepage</Link></span>
                <TodoLayout
                    todos={todos}
                    onAddTodo={(text) => dispatch(addTodo(text))}
                    onToggleTodo={(id) => dispatch(toggleTodo(id))}
                    onDeleteTodo={(id) => dispatch(removeTodo(id))}
                />
            </div>
        </div>
        {/* <FooterSection /> */}
    </div>
  );
};

export default TodoPage;
