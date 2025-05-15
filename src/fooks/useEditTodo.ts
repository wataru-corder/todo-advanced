import { useContext, useState } from "react"
import { EditTodoContext } from "../providers/EditContext"

export const useEditTodo = () => {
    const { isEditable, setIsEditable } = useContext(EditTodoContext)

    const [isEditId, setIsEditId] = useState('')

    const handleEditTodo = (targetTodo: string) => {
        setIsEditable(true)
        setIsEditId(targetTodo)

        // 入力欄とtodo.titileの紐づけ
    }
    return { handleEditTodo, isEditable, isEditId }
}