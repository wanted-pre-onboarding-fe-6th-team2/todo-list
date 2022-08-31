import React, { useState } from 'react';
import * as Styled from 'styles/todo/todo.styled';
import TodoApiService from 'api/todos';

const TodoItem = ({ todo }) => {
  const accessToken = localStorage.getItem('token') || '';

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState('');

  const handleEditMode = () => setIsEditMode(!isEditMode);

  const handleDelete = id => {
    TodoApiService.deleteTodo({ accessToken, todoId: id });
  };

  const handleComplete = todo => {
    const completedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    updateTodo(completedTodo);
  };

  const handleEdit = todo => {
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

  const updateTodo = todo => {
    TodoApiService.updateTodo({
      accessToken,
      isCompleted: todo.isCompleted,
      todo: todo.todo,
      todoId: todo.id,
    });
  };

  return (
    <Styled.Li key={todo.id}>
      {isEditMode ? (
        <>
          <Styled.Input defaultValue={todo.todo} onChange={e => setEditedTodo(e.target.value)} />
          <div>
            <Styled.Button onClick={() => handleEdit(todo)}>수정</Styled.Button>
            <Styled.Button onClick={handleEditMode}>취소</Styled.Button>
          </div>
        </>
      ) : (
        <>
          <Styled.Paragraph iscompleted={todo.isCompleted}>{todo.todo}</Styled.Paragraph>
          <div>
            <Styled.Button onClick={() => handleComplete(todo)}>완료</Styled.Button>
            <Styled.Button onClick={handleEditMode}>수정</Styled.Button>
            <Styled.Button onClick={() => handleDelete(todo.id)}>삭제</Styled.Button>
          </div>
        </>
      )}
    </Styled.Li>
  );
};

export default TodoItem;
