import SignUpForm from 'components/auth/SignUpForm';
import React from 'react';
import * as Styled from 'styles/auth/signUp';

export default function SignUp() {
  return (
    <Styled.Contain>
      <Styled.Title>회원가입</Styled.Title>
      <SignUpForm />
    </Styled.Contain>
  );
}
