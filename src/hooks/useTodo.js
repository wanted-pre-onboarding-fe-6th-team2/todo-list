import { useCallback } from 'react';
import { TodoApiService } from 'api/todos';

export const useTodo = () => {
  const token = localStorage.getItem('token') || '';

  const getTodos = useCallback(async () => {
    const tasks = await TodoApiService.getTodos({ token });

    return tasks;
  }, [token]);

  const createTodo = useCallback(
    async (todo, token) => {
      await TodoApiService.createTodo({ todo, token });
      getTodos();
    },
    [getTodos]
  );

  const updateTodo = useCallback(
    async (token, { isCompleted, todo, todoId }) => {
      await TodoApiService.updateTodo({ token, isCompleted, todo, todoId });
      getTodos();
    },
    [getTodos]
  );

  const deleteTodo = useCallback(
    async todoId => {
      await TodoApiService.deleteTodo({ token, todoId });
      getTodos();
    },
    [getTodos, token]
  );

  return [getTodos, createTodo, updateTodo, deleteTodo];
};
