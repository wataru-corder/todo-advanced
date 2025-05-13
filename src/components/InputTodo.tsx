import React, { type ChangeEvent } from 'react';

type Props = {
  inputValue: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
};

export const InputTodo: React.FC<Props> = ({
  inputValue,
  handleInputChange,
  handleAddTodo,
}) => {
  return (
    <>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>追加</button>
    </>
  );
};
