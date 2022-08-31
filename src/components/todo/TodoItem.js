import React, { useState } from 'react';
import * as Styled from 'styles/todo/todo.styled';
import TodoApiService from 'api/todos';

const TodoItem = ({ todo }) => {
  const accessToken = localStorage.getItem('token') || '';

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState('');

  const handleToggleEditMode = () => setIsEditMode(!isEditMode);

  const handleDeleteTodo = id => {
    TodoApiService.deleteTodo({ accessToken, todoId: id });
  };

  const updateTodo = todo => {
    TodoApiService.updateTodo({
      accessToken,
      isCompleted: todo.isCompleted,
      todo: todo.todo,
      todoId: todo.id,
    });
  };

  const handleToggleTodo = todo => {
    const completedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    updateTodo(completedTodo);
  };

  const handleEditTodo = todo => {
    if (editedTodo !== todo.todo) {
      const newTodo = {
        ...todo,
        todo: editedTodo,
      };
      updateTodo(newTodo);
      setIsEditMode(false);
    } else {
      alert('할 일을 수정해주세요.');
    }
  };

  return (
    <Styled.TodoItem>
      {isEditMode ? (
        <>
          <Styled.Input defaultValue={todo.todo} onChange={e => setEditedTodo(e.target.value)} />
          <div>
            <Styled.Button onClick={() => handleEditTodo(todo)}>수정</Styled.Button>
            <Styled.Button onClick={handleToggleEditMode}>취소</Styled.Button>
          </div>
        </>
      ) : (
        <>
          <Styled.Paragraph iscompleted={todo.isCompleted}>{todo.todo}</Styled.Paragraph>
          <div>
            <Styled.Button onClick={() => handleToggleTodo(todo)}>완료</Styled.Button>
            <Styled.Button onClick={handleToggleEditMode}>수정</Styled.Button>
            <Styled.Button onClick={() => handleDeleteTodo(todo.id)}>삭제</Styled.Button>
          </div>
        </>
      )}
    </Styled.TodoItem>
  );
};

export default TodoItem;
