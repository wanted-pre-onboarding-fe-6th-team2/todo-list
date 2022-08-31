import styled from '@emotion/styled';

const Form = styled.form``;
const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;
const Label = styled.label`
  width: 100px;
`;
const Input = styled.input`
  height: 35px;
  width: 100%;
`;
const ErrorMessage = styled.p`
  color: red;
  margin-left: 100px;
  font-size: 12px;
  margin-bottom: 10px;
`;
const Submit = styled.input`
  height: 45px;
  width: 100%;
  background: #000;
  color: #fff;
  font-size: 16px;
  border: 0;
  cursor: pointer;
  &: disabled {
    cursor: initial;
    color: #888;
    background: #dddddd;
  }
`;

export { Form, Row, Label, Input, ErrorMessage, Submit };
