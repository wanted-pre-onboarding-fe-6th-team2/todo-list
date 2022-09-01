import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as Styled from 'components/SignupForm/SignupForm.styled';
import { signupValidator } from 'utils/validator';
import AuthApiService from 'api/auth';
import { ROUTES } from 'constants/route';

const SignupForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // 회원가입 input validations
  const [validations, setValidations] = useState({
    isValidEmail: true,
    isValidPassword: true,
    isValidConfirmPassword: false,
    isSamePassword: true,
  });

  // input 유효성 검사 만족하지 않을 경우, 회원가입 버튼 비활성화
  const isDisabled =
    !validations.isValidEmail ||
    !validations.isValidPassword ||
    !validations.isValidConfirmPassword ||
    !validations.isSamePassword;

  // 회원가입 input 유효성 검사
  const handleChangeInputs = e => {
    const { value, name } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
    setValidations(signupValidator({ ...inputs, [name]: value }));
  };

  // 회원가입 버튼 클릭 로직
  const handleClickSignup = async e => {
    e.preventDefault();
    const { email, password } = inputs;
    try {
      await AuthApiService.signUp({ email, password });
      alert('회원가입이 완료되었습니다.');
      navigate(ROUTES.SIGNIN); // 로그인 창으로 이동
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Styled.Container>
      <Styled.Title>회원가입</Styled.Title>
      <Styled.Form onSubmit={e => handleClickSignup(e)}>
        <Styled.LabelBox>
          <Styled.Label htmlFor="email">이메일</Styled.Label>
          {!validations.isValidEmail && (
            <Styled.ValidationText>올바른 형식의 이메일을 입력하세요.</Styled.ValidationText>
          )}
        </Styled.LabelBox>
        <Styled.Input
          id="email"
          type="text"
          name="email"
          placeholder="이메일을 입력하세요."
          onChange={handleChangeInputs}
        />
        <Styled.LabelBox>
          <Styled.Label htmlFor="password">비밀번호</Styled.Label>
          {!validations.isValidPassword && (
            <Styled.ValidationText>8자 이상 비밀번호를 입력해주세요.</Styled.ValidationText>
          )}
        </Styled.LabelBox>
        <Styled.Input
          id="password"
          type="password"
          name="password"
          placeholder="8자 이상 비밀번호를 입력하세요."
          onChange={handleChangeInputs}
        />
        <Styled.LabelBox>
          <Styled.Label htmlFor="confirmPassword">비밀번호 확인</Styled.Label>
          {!validations.isSamePassword && (
            <Styled.ValidationText>비밀번호가 일치하지 않습니다.</Styled.ValidationText>
          )}
        </Styled.LabelBox>
        <Styled.Input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="위와 동일한 비밀번호를 입력해주세요."
          onChange={handleChangeInputs}
        />
        <Styled.Button type="submit" disabled={isDisabled}>
          가입하기
        </Styled.Button>
      </Styled.Form>
      <Styled.Text>
        아이디가 있으신가요?
        <Link to={ROUTES.SIGNIN}>로그인하기</Link>
      </Styled.Text>
    </Styled.Container>
  );
};

export default SignupForm;
