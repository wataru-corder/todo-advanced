import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { TodoType } from '../types/TodoType';
import { TodosContext } from '../providers/TodoContext';
import { useInputTodo } from './useInputTodo';

export const useAddTodo = () => {
  const { todos, setTodos } = useContext(TodosContext)
  const { inputValue, setInputValue } = useInputTodo();


  const handleAddTodo = () => {
  
    if (inputValue.trim() !== '') {
      const newTodo: TodoType = {
        id: uuidv4(),
        title: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  return { handleAddTodo, setInputValue, inputValue, };
};
