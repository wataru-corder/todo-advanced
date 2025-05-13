import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { TodoType } from '../types/TodoType';

export const useAddTodo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo: TodoType = {
        id: uuidv4(),
        title: inputValue,
        status: 'notStarted',
        detail: '',
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  return {todos,inputValue,handleAddTodo,setInputValue};
};
