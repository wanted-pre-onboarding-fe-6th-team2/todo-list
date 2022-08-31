import React from 'react';
import * as Styled from 'styles/todo/todo.styled';

const TodoForm = () => {
  return (
    <Styled.Form>
      <Styled.Input type="text" placeholder="할 일을 작성해 주세요" />
      <Styled.Button>추가</Styled.Button>
    </Styled.Form>
  );
};

export default TodoForm;
