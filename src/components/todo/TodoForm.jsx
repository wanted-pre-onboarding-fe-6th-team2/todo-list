import React, { useState } from 'react';
import * as Styled from 'pages/Todos/Todos.styled';
import todoApiService from 'api/todos';
import { LOCALSTORAGE } from 'constants/localstorage';

const TodoForm = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const accessToken = localStorage.getItem(LOCALSTORAGE.ACCESS_TOKEN) || '';

  const handleCreateTodo = e => {
    e.preventDefault();

    if (newTodo) {
      todoApiService
        .createTodo({ todo: newTodo, accessToken })
        .then(response => {
          setTodos(prev => [...prev, response]);
        })
        .catch(error => alert(error));

      setNewTodo('');
    } else {
      alert('할 일을 입력해주세요.');
    }
  };

  return (
    <Styled.Form>
      <Styled.Input
        type="text"
        value={newTodo}
        placeholder="할 일을 작성해 주세요"
        onChange={e => setNewTodo(e.target.value)}
      />
      <Styled.CreateButton onClick={handleCreateTodo}>추가</Styled.CreateButton>
    </Styled.Form>
  );
};

export default TodoForm;
