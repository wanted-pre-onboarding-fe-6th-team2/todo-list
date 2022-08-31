import React, { useState, useRef } from 'react';
import * as Styled from 'styles/todo/todo.styled';
import TodoApiService from 'api/todos';

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');

  const inputRef = useRef();

  const accessToken = localStorage.getItem('token') || '';

  const handleAddClick = e => {
    e.preventDefault();

    if (newTodo) {
      TodoApiService.createTodo({ todo: newTodo, accessToken });
      inputRef.current.value = '';
    } else {
      alert('할 일을 입력해주세요.');
    }
  };

  return (
    <Styled.Form>
      <Styled.Input
        type="text"
        ref={inputRef}
        placeholder="할 일을 작성해 주세요"
        onChange={e => setNewTodo(e.target.value)}
      />
      <Styled.Button onClick={handleAddClick}>추가</Styled.Button>
    </Styled.Form>
  );
};

export default TodoForm;
