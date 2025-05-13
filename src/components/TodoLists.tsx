import type { TodoType } from "../types/TodoType";
import React from 'react'; 

type TodoListProps = {
  todos: TodoType[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};