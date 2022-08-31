import { useRef, useState } from 'react';
import * as Styled from 'styles/todo/TodoForm.styled';
import TodoApiService from 'api/todos';

const TodoForm = ({ text, setText }) => {
  const inputRef = useRef();

  const [todoInput, setTodoInput] = useState('');

  const handleChange = e => {
    setTodoInput(e.target.value);
  };

  // 할 일 생성 post 요청
  const onSubmit = e => {
    inputRef.current.focus();
    e.preventDefault();

    const todo = todoInput;
    const accessToken = localStorage.getItem('token') || '';

    TodoApiService.createTodo({ todo, accessToken }).then(res => {
      setText(!text);
      setTodoInput('');
    });
  };

  return (
    <Styled.FormBox onChange={handleChange}>
      <Styled.Input
        value={todoInput}
        onChange={handleChange}
        ref={inputRef}
        placeholder="할 일을 입력해주세요!"
      />
      <Styled.Button onClick={onSubmit}>추가하기</Styled.Button>
    </Styled.FormBox>
  );
};

export default TodoForm;
