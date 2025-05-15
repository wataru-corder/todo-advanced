
import { useContext } from 'react';
import { useAddTodo } from '../fooks/useAddTodo';
import { EditTodoContext } from '../providers/EditContext';
import { InputContext } from '../providers/InputContext';
import { useInputTodo } from '../fooks/useInputTodo';
import { useEditTodo } from '../fooks/useEditTodo';


export const InputTodo: React.FC = () => {
  const { isEditable, setIsEditable } = useContext(EditTodoContext)
  const { handleInputChange } = useInputTodo()
  const { inputValue } = useContext(InputContext)
  const { handleAddTodo } = useAddTodo()
  const { newTitle } = useEditTodo()

  const clearEdit = () => {
    setIsEditable(false)
  }
  return (
    <>
      {isEditable ?
        <>
          <input value={newTitle} onChange={handleInputChange} />
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
