import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Styled from 'components/SignupForm.style';
import authApiService from 'api/auth';
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
  const isDisabled = !validations.isValidEmail || !validations.isValidPassword;

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
      const signInResponse = await authApiService.signIn({ email, password });
      // 토큰 등록

      const { access_token } = signInResponse;

      localStorage.setItem(LOCALSTORAGE.ACCESS_TOKEN, access_token);
      // 리다이렉트
      alert('로그인 되었습니다.');
      navigate(ROUTES.TODOS);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Styled.Container>
      <Styled.Title>로그인</Styled.Title>
      <Styled.Form onSubmit={handleSignIn}>
        <Styled.LabelBox>
          <Styled.Label htmlFor="email">이메일</Styled.Label>
          {!validations.isValidEmail && inputs.email && (
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
          <Styled.Label htmlFor="confirmPassword">비밀번호</Styled.Label>
          {!validations.isValidPassword && inputs.password && (
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
        <Styled.Button type="submit" disabled={isDisabled}>
          로그인
        </Styled.Button>
      </Styled.Form>
      <Styled.Text>
        아이디가 있으신가요?
        <Link to={ROUTES.SIGNUP}>회원가입하기</Link>
      </Styled.Text>
    </Styled.Container>
  );
};

export default SignInForm;
