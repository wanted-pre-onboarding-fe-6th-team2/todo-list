import React, { useState, useEffect } from 'react';
import * as Styled from 'pages/Todos/Todos.styled';
import TodoList from 'components/todo/TodoList';
import TodoForm from 'components/todo/TodoForm';
import todoApiService from 'api/todos';
import { LOCALSTORAGE } from 'constants/localstorage';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCALSTORAGE.ACCESS_TOKEN) || '';

    todoApiService.getTodos({ accessToken }).then(response => setTodos(response));
  }, []);

  return (
    <Styled.Container>
      <h1>Todo</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} />
    </Styled.Container>
  );
};

export default Todos;
