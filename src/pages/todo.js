import * as Styled from 'styles/todo/todo.styled';

import TodoList from 'components/todo/TodoList';
import TodoForm from 'components/todo/TodoForm';

const Todo = () => (
  <Styled.Container>
    <h1>Todo</h1>
    <TodoForm />
    <TodoList />
  </Styled.Container>
);

export default Todo;
