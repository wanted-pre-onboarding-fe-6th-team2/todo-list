import styled from '@emotion/styled';

const Container = styled.section`
  width: 60%;
  margin: 2em auto;

  & > h1 {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1em;
    color: #9946e9;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 2em;
  margin-bottom: 1em;
  display: flex;
  gap: 1em;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 75%;
  height: 2.5em;
  padding: 0 0.5em;
  border-radius: 5px;
  border: 1px solid #9946e9;
  font-weight: bold;
  box-sizing: border-box;

  &:focus {
    background-color: #9946e9;
    outline: none;
  }

  &::placeholder {
    font-weight: 300;
  }
`;

const EditInput = styled.input`
  width: 70%;
  border: none;
  border-bottom: 2px solid #9946e9;
  font-weight: bold;
  box-sizing: border-box;

  &:focus {
    background-color: #9946e9;
    outline: none;
  }

  &::placeholder {
    font-weight: 300;
  }
`;

const CreateButton = styled.button`
  height: 2.5em;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #9946e9;
  color: #9946e9;
  font-weight: bold;
`;

const Button = styled.button`
  width: 100%;
  height: 2em;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #9946e9;
  color: #9946e9;
  font-weight: bold;
`;

const TodoList = styled.ul`
  width: 100%;
`;

const TodoItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;

  & > div {
    display: flex;
    gap: 0.5em;
  }

  @media all and (max-width: 768px) {
    flex-direction: column;
    gap: 1em;

    & > div,
    p {
      width: 100%;
    }
  }
`;

const TodoContent = styled.p`
  padding-left: 0.5em;
  font-size: 0.9em;
  width: 75%;
  height: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  text-decoration: ${props => (props.iscompleted ? 'line-through' : 'none')};
  color: ${props => (props.iscompleted ? '#aaa' : '#000')};
`;

export { Container, Form, Input, EditInput, Button, CreateButton, TodoList, TodoItem, TodoContent };
