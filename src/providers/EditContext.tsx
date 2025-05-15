import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"

type EditContextType = {
    isEditable: boolean;
    setIsEditable: Dispatch<SetStateAction<boolean>>
}
const EditContextValue: EditContextType = {
    isEditable: false,
    setIsEditable: () => { }
}
export const EditTodoContext = createContext(EditContextValue)
export const EditTodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isEditable, setIsEditable] = useState(false)
    return (
        <EditTodoContext.Provider value={{ isEditable, setIsEditable }}>
            {children}
        </EditTodoContext.Provider>
    )
}