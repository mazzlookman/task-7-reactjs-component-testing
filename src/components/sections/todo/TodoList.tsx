import React from 'react';
import TodoItem from '../../composites/TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleTodo, onDeleteTodo }) => (
  <div className="space-y-3">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        text={todo.text}
        completed={todo.completed}
        onToggle={() => onToggleTodo(todo.id)}
        onDelete={() => onDeleteTodo(todo.id)}
      />
    ))}
  </div>
);

export default TodoList;
