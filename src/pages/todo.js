import React, { useState, useEffect } from 'react';
import * as Styled from 'styles/todo/todo.styled';
import TodoList from 'components/todo/TodoList';
import TodoForm from 'components/todo/TodoForm';
import TodoApiService from 'api/todos';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token') || '';

    TodoApiService.getTodos({ accessToken: token }).then(response => setTodos(response));
  }, [todos]);

  return (
    <Styled.Container>
      <h1>Todo</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </Styled.Container>
  );
};

export default Todo;
