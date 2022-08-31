import React, { useState, useEffect } from 'react';
// import { useTodo } from 'hooks/useTodo';
import * as Styled from 'styles/todo/todo.styled';
import TodoItem from './TodoItem';

const dummy = [
  {
    id: 1,
    todo: '과제하기',
    isCompleted: true,
    userId: 1,
  },
  {
    id: 2,
    todo: '동료학습 하기',
    isCompleted: false,
    userId: 1,
  },
];

const TodoList = () => {
  // const [getTodos] = useTodo();

  const [todos, setTodos] = useState([]);

  // console.log(getTodos());

  useEffect(() => {
    // setTodos(getTodos());
    setTodos(dummy);
  }, []);

  return (
    <Styled.Ul>
      {todos &&
        todos.map(todo => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
    </Styled.Ul>
  );
};

export default TodoList;
