import { TodoList } from './components/TodoLists';
import { InputTodo } from './components/InputTodo';


export const Todo = () => {


  return (
    <>
      <div>
        <InputTodo/>
      </div>
      <div>
        <TodoList />
      </div>
    </>
  );
};
