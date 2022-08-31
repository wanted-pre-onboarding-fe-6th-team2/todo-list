import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const defaultBox = css`
  border: none;
  box-sizing: border-box;
  padding: 12px 12px;
  width: 320px;
  height: 60px;
  border-radius: 1px;
`;

const SignLayoutWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  padding: 30px 0px;
  width: 400px;
  height: 400px;
  background: #e9dac1;
  h3 {
    font-weight: 700;
    font-size: 21px;
    margin-bottom: 40px;
  }
`;

const InputWrapper = styled.div`
  width: 320px;
  height: 80px;
  margin-bottom: 32px;
  p {
    margin: 16px 0;
    color: #d1512d;
  }
`;

const Input = styled.input`
  ${defaultBox}
  outline: none;
  box-shadow: #9ed2c6 0px 0px 0px 3px;
`;

const SubmitBtn = styled.button`
  ${defaultBox}
  background-color: #508ac7;
  color: white;
  margin-bottom: 16px;
  font-size: 18px;
  cursor: pointer;
  ${props =>
    !props.isAllow &&
    css`
      &:hover {
        cursor: not-allowed;
      }
      background-color: gray;
    `}
`;

export { SignLayoutWrapper, InputWrapper, Input, SubmitBtn };
