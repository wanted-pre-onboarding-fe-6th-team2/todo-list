import React, { useState, useEffect } from 'react';
import * as Styled from 'pages/Todos/Todos.styled';
import TodoList from 'components/TodoList';
import TodoForm from 'components/TodoForm';
import todoApiService from 'api/todos';
import { LOCALSTORAGE } from 'constants/localstorage';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/route';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCALSTORAGE.ACCESS_TOKEN) || '';

    if (!accessToken) {
      navigate(ROUTES.SIGNIN);
      return;
    }

    todoApiService.getTodos({ accessToken }).then(response => setTodos(response));
  }, [navigate]);

  return (
    <Styled.Container>
      <h1>Todo</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} />
    </Styled.Container>
  );
};

export default Todos;
