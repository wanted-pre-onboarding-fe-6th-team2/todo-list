import React, { useState, useEffect } from 'react';
import * as Styled from 'styles/todo/todo.styled';
import TodoItem from './TodoItem';
import TodoApiService from 'api/todos';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    TodoApiService.getTodos({ accessToken: token }).then(response => setTodos(response));
  }, [token]);

  return (
    <Styled.Ul>
      {todos && todos.length === 0 && <h3>No Tasks.</h3>}
      {todos &&
        todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
    </Styled.Ul>
  );
};

export default TodoList;
