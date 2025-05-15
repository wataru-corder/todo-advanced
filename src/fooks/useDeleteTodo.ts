import { useContext } from 'react';
import { TodosContext } from '../providers/TodoContext';

export const useDeleteTodo = () => {
  const { todos, setTodos } = useContext(TodosContext)

  const handleDeleteTodo = (id:string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return{handleDeleteTodo}
};
