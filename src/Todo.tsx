import type { ChangeEvent } from 'react';
import { useAddTodo } from './fooks/useAddTodo';
import { TodoList } from './components/TodoLists';
import { InputTodo } from './components/InputTodo';

export const Todo = () => {
  const { todos, inputValue, handleAddTodo, setInputValue } = useAddTodo();
  // const { todos, setTodos } = useTodos();
  //useContextでどこからでもtodosが取得できるように

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>
        <InputTodo
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleAddTodo={handleAddTodo}
        />
      </div>
      <div>
        <TodoList todos={todos} />
      </div>
    </>
  );
};
