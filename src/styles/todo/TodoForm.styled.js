import styled from '@emotion/styled';

const FormBox = styled.form`
  display: flex;
`;
const Input = styled.input`
  flex: 1; /* 버튼을 뺀 빈 공간을 모두 채워줍니다 */
  font-size: 1.25rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #0064ff;
`;

const Button = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1rem;
  background: #1e90ff;
  border: 1px solid #1e90ff;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: #0064ff;
  }
`;

export { FormBox, Input, Button };
