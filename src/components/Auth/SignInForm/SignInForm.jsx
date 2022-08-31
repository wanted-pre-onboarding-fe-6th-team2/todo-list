import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Styled from './SignInForm.styled';
import AuthApiService from 'api/auth';
import { loginValidator } from 'utils/validator';
import { ROUTES } from 'constants/route';
import { LOCALSTORAGE } from 'constants/localstorage';

const SignInForm = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  // 로그인 input validations
  const [validations, setValidations] = useState({
    isValidEmail: false,
    isValidPassword: false,
  });

  // input 유효성 검사 만족하지 않을 경우, 로그인 버튼 비활성화
  const buttonDisabled = !validations.isValidEmail || !validations.isValidPassword;

  // 로그인 input 유효성 검사
  const handleChangeInputs = e => {
    const { value, name } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
    setValidations(loginValidator({ ...inputs, [name]: value }));
  };

  const handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = inputs;
    try {
      const signInResponse = await AuthApiService.signIn({ email, password });
      // 토큰 등록
      localStorage.setItem(LOCALSTORAGE.ACCESS_TOKEN, signInResponse.access_token);
      // 리다이렉트
      alert('로그인 되었습니다.');
      navigate(0);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Styled.SignLayoutWrapper onSubmit={e => handleSignIn(e)}>
      <h3>로그인</h3>
      <Styled.InputWrapper>
        <Styled.Input
          id="email"
          type="text"
          name="email"
          placeholder="이메일을 입력하세요."
          onChange={handleChangeInputs}
        />
        {!validations.isValidEmail && inputs.email && <p>올바른 형식의 이메일을 입력하세요.</p>}
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.Input
          id="password"
          type="password"
          name="password"
          placeholder="8자 이상 비밀번호를 입력하세요."
          onChange={handleChangeInputs}
        />
        {!validations.isValidPassword && inputs.password && (
          <p>8자 이상 비밀번호를 입력해주세요.</p>
        )}
      </Styled.InputWrapper>
      <Styled.SubmitBtn type="submit" disabled={buttonDisabled}>
        로그인
      </Styled.SubmitBtn>
      <Link to={ROUTES.SIGNUP}>회원가입하기</Link>
    </Styled.SignLayoutWrapper>
  );
};

export default SignInForm;
