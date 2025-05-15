import { useContext, useState } from "react"
import { EditTodoContext } from "../providers/EditContext"
import { TodosContext } from "../providers/TodoContext"

export const useEditTodo = () => {
    const { isEditable, setIsEditable } = useContext(EditTodoContext)
    const { todos } = useContext(TodosContext)
    const [newTitle, setNewTitle] = useState('')

    const edit = (targetTodoId: string) => {
        const target = todos.filter((todo) => todo.id === targetTodoId)
        if(target){
            setNewTitle(target)
        }
    }

    const handleEditTodo = (targetTodoId: string) => {
        setIsEditable(true)
        edit(targetTodoId)

        // 入力欄とtodo.titileの紐づけ
    }
    return { handleEditTodo, isEditable, newTitle }
}