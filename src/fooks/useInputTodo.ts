import { useState, type ChangeEvent } from "react";

export const useInputTodo = () => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      };
      return {handleInputChange,inputValue,setInputValue}
}