// src/components/organisms/TodoForm.tsx
import React, { useState } from 'react';
import Input from '../../bases/todo/Input';
import Button from '../../bases/todo/Button';

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
      <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new todo" />
      <Button label="Add" onClick={handleAddTodo} />
    </div>
  );
};

export default TodoForm;