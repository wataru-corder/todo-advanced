import React, { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import type { TodoType } from "../types/TodoType";

type TodoContextType = {
  todos:TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>
}

const TodoContextValue: TodoContextType = {
  todos:[],
  setTodos: () => {}
}

export const TodosContext = createContext(TodoContextValue);

export const TodosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
return(
  <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
  </TodosContext.Provider>
)
}