import * as Styled from 'styles/todo/TodoList.styled';
import TodoForm from 'components/todo/TodoForm';
import TodoItem from 'components/todo/TodoItem';

const TodoList = () => {
  return (
    <Styled.Container>
      <Styled.Title>Todo-List</Styled.Title>
      <TodoForm />
      <TodoItem />
    </Styled.Container>
  );
};

export default TodoList;
