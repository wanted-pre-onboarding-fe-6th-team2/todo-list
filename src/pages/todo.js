import * as Styled from 'styles/todo/todo';

import TodoList from 'components/todo/TodoList';
import TodoForm from 'components/todo/TodoForm';

const Todo = () => (
  <Styled.Container>
    <TodoForm />
    <TodoList />
  </Styled.Container>
);

export default Todo;
