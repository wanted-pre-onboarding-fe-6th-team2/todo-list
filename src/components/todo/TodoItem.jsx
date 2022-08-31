import React, { useState } from 'react';
import * as Styled from 'pages/Todos/Todos.styled';
import todoApiService from 'api/todos';
import { LOCALSTORAGE } from 'constants/localstorage';

const TodoItem = ({ todo }) => {
  const accessToken = localStorage.getItem(LOCALSTORAGE.ACCESS_TOKEN) || '';

  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState('');
  const [currentTodo, setCurrentTodo] = useState(todo);

  const handleToggleEditMode = () => setIsEditMode(!isEditMode);

  const handleDeleteTodo = id => {
    const isDeleteConfirm = window.confirm('삭제하시겠습니까?');

    if (isDeleteConfirm) {
      todoApiService.deleteTodo({ accessToken, todoId: id });
      setCurrentTodo(prev => {
        return { ...prev, id: 'deleted' };
      });
    }
  };

  const updateTodo = todo => {
    todoApiService.updateTodo({
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
    setCurrentTodo(completedTodo);
  };

  const handleEditTodo = todo => {
    if (editedTodo && editedTodo !== todo.todo) {
      const newTodo = {
        ...todo,
        todo: editedTodo,
      };

      updateTodo(newTodo);
      setCurrentTodo(newTodo);
      setIsEditMode(false);
    } else {
      alert('할 일을 수정해주세요.');
    }
  };

  if (currentTodo.id === 'deleted') return null;

  return (
    <Styled.TodoItem>
      {isEditMode ? (
        <>
          <Styled.EditInput
            defaultValue={currentTodo.todo}
            onChange={e => setEditedTodo(e.target.value)}
          />
          <div>
            <Styled.Button onClick={() => handleEditTodo(currentTodo)}>수정</Styled.Button>
            <Styled.Button onClick={handleToggleEditMode}>취소</Styled.Button>
          </div>
        </>
      ) : (
        <>
          <Styled.TodoContent iscompleted={currentTodo.isCompleted}>
            {currentTodo.todo}
          </Styled.TodoContent>
          <div>
            <Styled.Button onClick={() => handleToggleTodo(currentTodo)}>완료</Styled.Button>
            <Styled.Button onClick={handleToggleEditMode}>수정</Styled.Button>
            <Styled.Button onClick={() => handleDeleteTodo(currentTodo.id)}>삭제</Styled.Button>
          </div>
        </>
      )}
    </Styled.TodoItem>
  );
};

export default TodoItem;
