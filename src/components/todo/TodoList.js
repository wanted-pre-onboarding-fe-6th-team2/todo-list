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
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGQzQG5hdmVyLmNvbSIsInN1YiI6MzQwOCwiaWF0IjoxNjYxOTQwMjY2LCJleHAiOjE2NjI1NDUwNjZ9.hcMONctw9EHIcPd1fCwr7pb2jkW_k7bJ388kmgPobws';

    TodoApiService.getTodos({ accessToken }).then(res => {
      console.log(res);
      setTodo(res.data);
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
