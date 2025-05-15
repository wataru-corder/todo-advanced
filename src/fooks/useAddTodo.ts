import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { TodoType } from '../types/TodoType';
import { TodosContext } from '../providers/TodoContext';

export const useAddTodo = () => {
  const { todos, setTodos } = useContext(TodosContext)

  //入力欄のクリア

  const handleAddTodo = (inputValue:string) => {
    if (inputValue.trim() !== '') {
      const newTodo: TodoType = {
        id: uuidv4(),
        title: inputValue,
      };
      setTodos([...todos, newTodo]);
      
    }
  };

  return { handleAddTodo };
};
