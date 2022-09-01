import styled from '@emotion/styled';

const Container = styled.div`
  width: 380px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 40px 30px;
  background-color: white;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  padding-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  margin-top: 20px;
  font-weight: 400;
`;

const LabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  padding: 5px;
  font-weight: 500;
`;

const ValidationText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #666666;
`;

const Input = styled.input`
  height: 38px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  height: 38px;
  border: 0;
  border-radius: 8px;
  outline: 0;
  margin-top: 10px;
  background-color: black;
  color: white;
  cursor: pointer;

  :disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export { Container, Title, Form, Text, LabelBox, Label, ValidationText, Input, Button };
