import { useContext, type ChangeEvent } from "react";
import { InputContext } from "../providers/InputContext";

export const useInputTodo = () => {
  const { setInputValue } = useContext(InputContext)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return { handleInputChange }
}