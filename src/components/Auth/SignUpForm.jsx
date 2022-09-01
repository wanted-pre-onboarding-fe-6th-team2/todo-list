import React, { useEffect, useState } from 'react';
// import AuthApiService from 'api/auth';
// import { useNavigate } from 'react-router-dom';
import * as Styled from 'styles/SignUp/SignUpForm.styled';

const emailRegex = /([\w-.]+)@([\w-.]+)/;

export default function SignUpForm() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [validation, setValidation] = useState({ email: false, password: false });
  // const navigate = useNavigate();

  // 가입 정보 입력
  const handleSignUpInfo = e => {
    const { id, value } = e.target;
    setUserInfo(prev => ({ ...prev, [id]: value }));
  };

  // 가입정보 유효성 검사
  useEffect(() => {
    setValidation(prev => ({ ...prev, email: emailRegex.test(userInfo.email) }));
    setValidation(prev => ({ ...prev, password: userInfo.password.length > 7 }));
  }, [userInfo]);

  // api 호출
  const handleSignUp = async e => {
    e.preventDefault();
    try {
      // await AuthApiService.signUp(userInfo);
      alert('회원가입이 완료되었습니다.');
      // navigate('/SignIn');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <Styled.Row>
        <Styled.Label htmlFor="email">이메일</Styled.Label>
        <Styled.Input
          type="email"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={handleSignUpInfo}
        />
      </Styled.Row>

      {!validation.email && (
        <Styled.ErrorMessage>@를 포함한 형식으로 작성해주세요.</Styled.ErrorMessage>
      )}

      <Styled.Row>
        <Styled.Label htmlFor="password">비밀번호</Styled.Label>
        <Styled.Input
          type="password"
          id="password"
          name="password"
          value={userInfo.password}
          onChange={handleSignUpInfo}
        />
      </Styled.Row>
      {!validation.password && <Styled.ErrorMessage>8자 이상 입력해주세요..</Styled.ErrorMessage>}
      <Styled.Submit
        type="submit"
        id="signupBtn"
        name="signup"
        value="회원가입"
        disabled={!(validation.email && validation.password)}
      />
    </form>
  );
}
