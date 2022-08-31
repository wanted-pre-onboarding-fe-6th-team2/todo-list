import { useEffect, useState } from 'react';
import * as Styled from 'styles/todo/TodoList.styled';
import TodoForm from 'components/todo/TodoForm';
import TodoItem from 'components/todo/TodoItem';
import TodoApiService from 'api/todos';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState(true);

  // Get 요청을 위한 useEffect
  useEffect(() => {
    const accessToken = localStorage.getItem('token') || '';

    TodoApiService.getTodos({ accessToken }).then(res => {
      setTodo(res);
    });
  }, [text]);

  return (
    <Styled.Container>
      <Styled.Title>Todo-List</Styled.Title>
      <Styled.FormWrapper>
        <TodoForm text={text} setText={setText} />
      </Styled.FormWrapper>
      <Styled.TodoItemWrapper>
        {todo.map(list => (
          <TodoItem key={list.id} list={list} />
        ))}
      </Styled.TodoItemWrapper>
    </Styled.Container>
  );
};

export default TodoList;
