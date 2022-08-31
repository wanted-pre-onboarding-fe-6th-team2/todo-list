import styled from '@emotion/styled';

export const Contain = styled.div`
  width: 500px;
  margin: 100px auto;
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form``;
export const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;
export const Label = styled.label`
  width: 100px;
`;
export const Input = styled.input`
  height: 35px;
  width: 100%;
`;
export const ErrorMessage = styled.p`
  color: red;
  margin-left: 100px;
  font-size: 12px;
  margin-bottom: 10px;
`;
export const Submit = styled.input`
  height: 45px;
  width: 100%;
  background: ${props => (props.disabled ? '#ddd' : '#000')};
  color: ${props => (props.disabled ? '#888' : '#fff')};
  font-size: 16px;
  border: 0;
  cursor: ${props => (props.disabled ? 'initial' : 'pointer')};
`;
