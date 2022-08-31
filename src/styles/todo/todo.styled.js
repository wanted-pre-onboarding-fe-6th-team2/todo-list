import styled from '@emotion/styled';

const Container = styled.section`
  width: 50%;
  margin: 2em auto;

  & > h1 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 1em;
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
  width: 70%;
  height: 2em;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-weight: bold;
  box-sizing: border-box;

  &:focus {
    background-color: #ccc;
    outline: none;
  }

  &::placeholder {
    font-weight: lighter;
  }
`;

const Button = styled.button`
  height: 2em;
  background-color: #ccc;
  border-radius: 5px;
  border: none;
`;

const Ul = styled.ul`
  width: 100%;
`;

const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;

  & > div {
    display: flex;
    gap: 0.5em;
  }
`;

const Paragraph = styled.p`
  font-size: 1em;
  width: 75%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  text-decoration: ${props => (props.iscompleted ? 'line-through' : 'none')};
  color: ${props => (props.iscompleted ? '#aaa' : '#000')};
`;

export { Container, Form, Input, Button, Ul, Li, Paragraph };
