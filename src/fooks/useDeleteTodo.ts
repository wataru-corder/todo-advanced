import type { TodoType } from '../types/TodoType';

type Props = {
  todos: TodoType[];
};

export const useDeleteTodo: React.FC<Props[]> = ({ todos }) => {
  const handleDeleteTodo = () => {
    const todo = todos.filter((todo) => todo.id === id);
  };
};
