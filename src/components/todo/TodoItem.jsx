import { useState } from 'react';
import * as Styled from 'styles/todo/TodoItem.styled';
import TodoApiService from 'api/todos';

const TodoItem = ({ list }) => {
  const [isDone, setisDone] = useState(false);
  const [switchValue, setSwitchValue] = useState([]);
  const [BtnValue, setBtnValue] = useState(true);
  const [editVal, setEditVal] = useState('');
  const [text, setText] = useState(list.id);
  const [listitem, setlist] = useState(list.todo);
  const [inputVal, setinputVal] = useState(list.isCompleted);

  // api 요청시 필요 항목
  const accessToken = localStorage.getItem('token') || '';

  const inputTxt = e => {
    setEditVal(e.target.value);
  };

  //취소버튼 숨기기
  const cancle = () => {
    setBtnValue(true);
    setisDone(!isDone);
    setSwitchValue([false]);
  };

  //check box
  const updateCheck = async e => {
    setinputVal(!inputVal);

    const isCompleted = !inputVal;
    const todo = listitem;
    const todoId = text;

    TodoApiService.updateTodo({ accessToken, isCompleted, todo, todoId }).then(res => {
      console.log(res);
      setlist(res.todo);
    });
  };

  //수정
  const onEdit = async e => {
    const isCompleted = inputVal;
    const todo = editVal;
    const todoId = text;

    TodoApiService.updateTodo({ accessToken, isCompleted, todo, todoId }).then(res => {
      console.log(res);
      setlist(res.todo);
    });
  };

  //삭제
  const onDelete = async e => {
    const todoId = text;

    TodoApiService.deleteTodo({ accessToken, todoId }).then(res => {
      setText({ id: 0 });
    });
  };
  if (text.id === 0) {
    return null;
  }

  return (
    <Styled.Todolist>
      <ul className={inputVal ? 'show' : ''}>
        <li>
          <input className="checkbox" type="checkbox" checked={inputVal} onChange={updateCheck} />
        </li>
        <div className="text">
          {switchValue[list.id] ? (
            <input
              className="txtInput"
              type="text"
              onChange={inputTxt}
              defaultValue={listitem}
            ></input>
          ) : (
            <p className="listTxt">{listitem}</p>
          )}
        </div>
        <li className="rightBtn">
          {BtnValue ? (
            <button
              className="viewBtn"
              onClick={() => {
                const copy = [...switchValue];
                copy[list.id] = !copy[list.id];
                setSwitchValue(copy);
                setisDone(!isDone);
                setBtnValue(!BtnValue);
              }}
            >
              수정
            </button>
          ) : (
            <button
              className="viewBtn"
              onClick={() => {
                const copy = [...switchValue];
                copy[list.id] = !copy[list.id];
                setSwitchValue(copy);
                setisDone(!isDone);
                setBtnValue(!BtnValue);
                onEdit();
              }}
            >
              제출
            </button>
          )}
          {isDone && (
            <button className="cancleBtn" onClick={cancle}>
              취소
            </button>
          )}
          {BtnValue && (
            <button className="deleteBtn" onClick={onDelete}>
              삭제
            </button>
          )}
        </li>
      </ul>
    </Styled.Todolist>
  );
};

export default TodoItem;
