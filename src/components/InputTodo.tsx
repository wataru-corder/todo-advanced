
import { useContext } from 'react';
import { useAddTodo } from '../fooks/useAddTodo';
import { useInputTodo } from '../fooks/useInputTodo';
import { EditTodoContext } from '../providers/EditContext';


export const InputTodo: React.FC = () => {
  const { isEditable,setIsEditable } = useContext(EditTodoContext)
  const { inputValue, handleInputChange } = useInputTodo()
  const { handleAddTodo } = useAddTodo()

  const clearEdit = () => {
    setIsEditable(false)
  }
  return (
    <>
      {isEditable ?
        <>
          <input value={inputValue} onChange={handleInputChange} />
          <button >編集を保存</button>
          <button onClick={clearEdit}>キャンセル</button>
        </>
        :
        <>
          <input value={inputValue} onChange={handleInputChange} />
          <button onClick={() => handleAddTodo(inputValue)}>追加</button>
        </>
      }
    </>
  );
};
