import styled from '@emotion/styled';

export const Container = styled.section`
  width: 50%;
  margin: 2em auto;

  & > h1 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 1em;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 2em;
  margin-bottom: 1em;
  display: flex;
  gap: 1em;
  justify-content: space-between;
`;

export const Input = styled.input`
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

export const Button = styled.button`
  height: 2em;
  background-color: #ccc;
  border-radius: 5px;
  border: none;
`;

export const Ul = styled.ul`
  width: 100%;
`;

export const Li = styled.li`
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

export const Paragraph = styled.p`
  font-size: 1em;
  text-decoration: ${props => (props.iscompleted ? 'line-through' : 'none')};
  color: ${props => (props.iscompleted ? '#aaa' : '#000')};
`;
