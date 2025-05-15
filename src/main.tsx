import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Todo } from './Todo.tsx';
import { TodosProvider } from './providers/TodoContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodosProvider>
    <Todo />
    </TodosProvider>
  </StrictMode>
);
