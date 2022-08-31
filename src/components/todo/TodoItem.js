import React, { useState } from 'react';
import * as Styled from 'styles/todo/todo.styled';
import TodoApiService from 'api/todos';

const TodoItem = ({ todo }) => {
  const token = localStorage.getItem('token') || '';
  const [editMode, setEditMode] = useState(false);

  const handleDelete = id => {
    TodoApiService.deleteTodo({ accessToken: token, todoId: id });
  };

  return (
    <Styled.Li key={todo.id}>
      {editMode ? (
        <>
          <Styled.Input defaultValue={todo.todo} />
          <div>
            <Styled.Button>수정</Styled.Button>
            <Styled.Button onClick={() => setEditMode(!editMode)}>취소</Styled.Button>
          </div>
        </>
      ) : (
        <>
          <Styled.Paragraph iscompleted={todo.isCompleted}>{todo.todo}</Styled.Paragraph>
          <div>
            <Styled.Button>완료</Styled.Button>
            <Styled.Button onClick={() => setEditMode(!editMode)}>수정</Styled.Button>
            <Styled.Button onClick={() => handleDelete(todo.id)}>삭제</Styled.Button>
          </div>
        </>
      )}
    </Styled.Li>
  );
};

export default TodoItem;
