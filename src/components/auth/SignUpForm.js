import React, { useEffect, useState } from 'react';
import * as Styled from 'styles/auth/signUp';

export default function SignUpForm() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [validation, setValidation] = useState({ email: false, password: false });

  // 가입 정보 입력
  const handleAuth = e => {
    const { id, value } = e.target;
    setUserInfo(prev => ({ ...prev, [id]: value }));
  };

  // 가입정보 유효성 검사
  useEffect(() => {
    const regex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setValidation(prev => ({ ...prev, email: regex.test(userInfo.email) }));
    setValidation(prev => ({ ...prev, password: userInfo.password.length > 7 }));
  }, [userInfo]);

  // api 호출
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // await AuthApiService.signUp(userInfo);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Row>
        <Styled.Label htmlFor="email">이메일</Styled.Label>
        <Styled.Input
          type="email"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={handleAuth}
        />
      </Styled.Row>
      <Styled.ErrorMessage>
        {!validation.email && `@를 포함한 형식으로 작성해주세요.`}
      </Styled.ErrorMessage>
      <Styled.Row>
        <Styled.Label htmlFor="password">비밀번호</Styled.Label>
        <Styled.Input
          type="password"
          id="password"
          name="password"
          value={userInfo.password}
          onChange={handleAuth}
        />
      </Styled.Row>
      <Styled.ErrorMessage>{!validation.password && `8자 이상 입력해주세요..`}</Styled.ErrorMessage>
      <Styled.Submit
        type="submit"
        id="signupBtn"
        name="signup"
        value="회원가입"
        disabled={!(validation.email && validation.password)}
      />
    </Styled.Form>
  );
}
