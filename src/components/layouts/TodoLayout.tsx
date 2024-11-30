import React from 'react';
import TodoForm from '../sections/todo/TodoForm';
import TodoList from '../sections/todo/TodoList';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

interface TodoLayoutProps {
  todos: { id: number; text: string; completed: boolean }[];
  onAddTodo: (text: string) => void;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoLayout: React.FC<TodoLayoutProps> = ({ todos, onAddTodo, onToggleTodo, onDeleteTodo }) => {
    const todosStore = useSelector((state: RootState) => state.todo.todos);
    
    return (
  <div className="w-full p-6 bg-white rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold text-center mb-6">Todo List App</h1>
    <TodoForm onAddTodo={onAddTodo} />
    <div className='h-96 overflow-y-scroll'>
        <div className='h-0.5 bg-neutral mb-4'></div>
        <TodoList todos={todos} onToggleTodo={onToggleTodo} onDeleteTodo={onDeleteTodo} />        
    </div>
    <div className='flex gap-4 mt-4'>
        <span>Total todo: {todosStore.length}</span>
        <span>Selesai: {todosStore.filter((todo) => todo.completed).length}</span>
    </div>
  </div>
    );
};

export default TodoLayout;
