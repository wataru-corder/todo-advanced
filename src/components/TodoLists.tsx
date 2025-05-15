import { useDeleteTodo } from "../fooks/useDeleteTodo";
import { useEditTodo } from "../fooks/useEditTodo";
import { TodosContext } from "../providers/TodoContext";
import React, { useContext } from 'react';



export const TodoList: React.FC = () => {
  const { todos } = useContext(TodosContext)
  const { handleDeleteTodo } = useDeleteTodo()
  const { handleEditTodo } = useEditTodo();


  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => handleEditTodo(todo.id)}>編集</button>
          <button onClick={() => handleDeleteTodo(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};