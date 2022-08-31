import React, { useState } from 'react';
import * as Styled from 'styles/todo/todo.styled';
import TodoApiService from 'api/todos';

const TodoItem = ({ todo }) => {
  const accessToken = localStorage.getItem('token') || '';

  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState('');

  const handleDelete = id => {
    TodoApiService.deleteTodo({ accessToken, todoId: id });
  };

  const handleComplete = todo => {
    const completedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    updateTodo(completedTodo);
  };

  const handleEdit = todo => {
    const newTodo = {
      ...todo,
      todo: editTodo,
    };

    updateTodo(newTodo);
    setEditMode(false);
  };

  const updateTodo = todo => {
    TodoApiService.updateTodo({
      accessToken,
      isCompleted: todo.isCompleted,
      todo: todo.todo,
      todoId: todo.id,
    });
  };

  return (
    <Styled.Li key={todo.id}>
      {editMode ? (
        <>
          <Styled.Input defaultValue={todo.todo} onChange={e => setEditTodo(e.target.value)} />
          <div>
            <Styled.Button onClick={() => handleEdit(todo)}>수정</Styled.Button>
            <Styled.Button onClick={() => setEditMode(!editMode)}>취소</Styled.Button>
          </div>
        </>
      ) : (
        <>
          <Styled.Paragraph iscompleted={todo.isCompleted}>{todo.todo}</Styled.Paragraph>
          <div>
            <Styled.Button onClick={() => handleComplete(todo)}>완료</Styled.Button>
            <Styled.Button onClick={() => setEditMode(!editMode)}>수정</Styled.Button>
            <Styled.Button onClick={() => handleDelete(todo.id)}>삭제</Styled.Button>
          </div>
        </>
      )}
    </Styled.Li>
  );
};

export default TodoItem;
