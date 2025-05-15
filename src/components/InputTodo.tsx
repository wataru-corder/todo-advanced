
import { useAddTodo } from '../fooks/useAddTodo';
import { useInputTodo } from '../fooks/useInputTodo';


export const InputTodo: React.FC = () => {
  const {inputValue,handleInputChange} = useInputTodo()
  const {handleAddTodo} = useAddTodo()
  
  return (
    <>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>追加</button>
    </>
  );
};
