import React, { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type InputCoontextType = {
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>
}
const InputContextValue: InputCoontextType = {
    inputValue: '',
    setInputValue: () => { }
}

export const InputContext = createContext(InputContextValue)

export const InputContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <InputContext.Provider value={{ inputValue, setInputValue }}>
            {children}
        </InputContext.Provider>
    )
}