import type { TodoType } from '../types/TodoType';
import { useAddTodo } from './useAddTodo';

type Props = {
  todos: TodoType[];
};

export const useDelete: React.FC<Props[]> = ({ todos }) => {
  const handleDeleteTodo = () => {
    const todo = todos.filter((todo) => todo.id === id);
  };
};
