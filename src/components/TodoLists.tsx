import type { TodoType } from "../types/TodoType";
import React from 'react'; 

type TodoListProps = {
  todos: TodoType[];
}

const handleDeleteTodo = (id:number,e) => {
console.log(id)
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}
        <button onClick={(e) => handleDeleteTodo(todo.id,e)}>削除</button>
        </li>
      ))}
    </ul>
  );
};