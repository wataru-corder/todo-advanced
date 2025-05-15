import { useDeleteTodo } from "../fooks/useDeleteTodo";
import { TodosContext } from "../providers/TodoContext";
import React, { useContext } from 'react';



export const TodoList: React.FC = () => {
  const { handleDeleteTodo } = useDeleteTodo()
  const {todos} = useContext(TodosContext)
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}
          <button onClick={() => handleDeleteTodo(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};