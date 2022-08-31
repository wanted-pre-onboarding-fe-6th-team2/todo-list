import SignUpForm from 'components/Auth/SignUpForm';
import React from 'react';
import * as Styled from 'styles/SignUp/SignUp.styled';

export default function SignUp() {
  return (
    <Styled.Container>
      <Styled.Title>회원가입</Styled.Title>
      <SignUpForm />
    </Styled.Container>
  );
}
