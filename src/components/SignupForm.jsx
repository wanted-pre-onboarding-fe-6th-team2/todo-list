import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as Style from 'components/SignupForm.style';
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
    <Style.Container>
      <Style.Title>회원가입</Style.Title>
      <Style.Form onSubmit={e => handleClickSignup(e)}>
        <Style.LabelBox>
          <Style.Label htmlFor="email">이메일</Style.Label>
          {!validations.isValidEmail && (
            <Style.ValidationText>올바른 형식의 이메일을 입력하세요.</Style.ValidationText>
          )}
        </Style.LabelBox>
        <Style.Input
          id="email"
          type="text"
          name="email"
          placeholder="이메일을 입력하세요."
          onChange={handleChangeInputs}
        />
        <Style.LabelBox>
          <Style.Label htmlFor="password">비밀번호</Style.Label>
          {!validations.isValidPassword && (
            <Style.ValidationText>8자 이상 비밀번호를 입력해주세요.</Style.ValidationText>
          )}
        </Style.LabelBox>
        <Style.Input
          id="password"
          type="password"
          name="password"
          placeholder="8자 이상 비밀번호를 입력하세요."
          onChange={handleChangeInputs}
        />
        <Style.LabelBox>
          <Style.Label htmlFor="confirmPassword">비밀번호 확인</Style.Label>
          {!validations.isSamePassword && (
            <Style.ValidationText>비밀번호가 일치하지 않습니다.</Style.ValidationText>
          )}
        </Style.LabelBox>
        <Style.Input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="위와 동일한 비밀번호를 입력해주세요."
          onChange={handleChangeInputs}
        />
        <Style.Button type="submit" disabled={isDisabled}>
          가입하기
        </Style.Button>
      </Style.Form>
      <Style.Text>
        아이디가 있으신가요?
        <Link to={ROUTES.SIGNIN}>로그인하기</Link>
      </Style.Text>
    </Style.Container>
  );
};

export default SignupForm;
