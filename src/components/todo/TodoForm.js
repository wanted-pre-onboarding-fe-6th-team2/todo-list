import React, { useState } from 'react';
import * as Styled from 'styles/todo/todo.styled';
import TodoApiService from 'api/todos';

const TodoForm = () => {
  const [newTodos, setNewTodos] = useState('');

  const accessToken = localStorage.getItem('token') || '';

  const handleAddClick = e => {
    e.preventDefault();

    newTodos && TodoApiService.createTodo({ todo: newTodos, accessToken });
    setNewTodos('');
  };

  return (
    <Styled.Form>
      <Styled.Input
        type="text"
        placeholder="할 일을 작성해 주세요"
        onChange={e => setNewTodos(e.target.value)}
      />
      <Styled.Button onClick={handleAddClick}>추가</Styled.Button>
    </Styled.Form>
  );
};

export default TodoForm;
