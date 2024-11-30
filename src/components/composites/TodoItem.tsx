import React from 'react';

interface TodoItemProps {
  key: string;
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, completed, key, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100">
      <div className='flex gap-4 items-center'>
          <input type='checkbox' name={key} id={key} onClick={onToggle} className='cursor-pointer h-4 w-4' />
          <label
            className={`${completed ? 'line-through text-gray-500' : ''}`}
            htmlFor={key}
          >
          {text}
          </label>
      </div>
      <button
        onClick={onDelete}
        className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
      >
        Delete
      </button>
    </div>
  )
};

export default TodoItem;
