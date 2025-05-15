import React, { createContext, useState, type Dispatch, type SetStateAction } from "react";
import type { TodoType } from "../types/TodoType";

type TodoContextType = {
  todos:TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>
}

const TodoContextDefaultValue: TodoContextType = {
  todos:[],
  setTodos: () => {}
}

export const TodosContext = createContext(TodoContextDefaultValue);

export const TodosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
return(
  <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
)
}