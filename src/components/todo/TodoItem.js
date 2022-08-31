import React, { useState } from 'react';
// import { useTodo } from 'hooks/useTodo';
import * as Styled from 'styles/todo/todo.styled';

const TodoItem = ({ todo }) => {
  // const [updateTodo, deleteTodo] = useTodo();

  const [editMode, setEditMode] = useState(false);

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
            <Styled.Button>삭제</Styled.Button>
          </div>
        </>
      )}
    </Styled.Li>
  );
};

export default TodoItem;
