// src/components/organisms/TodoForm.tsx
import React, { useState } from 'react';
import Input from '../../bases/Input.tsx';
import Button from '../../bases/Button.tsx';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <div className="flex gap-2 mb-8 justify-center">
      <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
          className={"w-1/2 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"}
      />
      <Button label="Add" onClick={handleAddTodo} className={"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"} />
    </div>
  );
};

export default TodoForm;