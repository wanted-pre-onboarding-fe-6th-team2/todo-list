import React from 'react';
import * as Styled from 'styles/todo/todo.styled';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <Styled.TodoList>
      {todos?.length === 0 && <h3>No Tasks.</h3>}
      {todos &&
        todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
    </Styled.TodoList>
  );
};

export default TodoList;
