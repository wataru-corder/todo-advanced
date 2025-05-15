import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Todo } from './Todo.tsx';
import { TodosProvider } from './providers/TodoContext.tsx';
import { EditTodoProvider } from './providers/EditContext.tsx';
import { InputContextProvider } from './providers/InputContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodosProvider>
      <InputContextProvider>
        <EditTodoProvider>
          <Todo />
        </EditTodoProvider>
      </InputContextProvider>
    </TodosProvider>
  </StrictMode>
);
