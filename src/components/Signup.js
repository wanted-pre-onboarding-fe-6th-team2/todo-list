import React, { useState, useRef } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
import * as Style from 'components/Signup.style';
import { signupValidator } from 'utils/validator';
import AuthApiService from 'api/auth';

const SignupForm = () => {
  // const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
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
    const inputs = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };
    setValidations(signupValidator(inputs));
  };

  // 회원가입 버튼 클릭 로직
  const handleClickSignup = async e => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      await AuthApiService.signUp(data);
      alert('회원가입이 완료되었습니다.');
      // navigate('/login'); // 로그인 창으로 이동
    } catch (error) {
      alert(error.response.data.message);
      throw new Error(error);
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
          placeholder="이메일을 입력하세요."
          onChange={handleChangeInputs}
          ref={emailRef}
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
          placeholder="8자 이상 비밀번호를 입력하세요."
          onChange={handleChangeInputs}
          ref={passwordRef}
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
          placeholder="위와 동일한 비밀번호를 입력해주세요."
          onChange={handleChangeInputs}
          ref={confirmPasswordRef}
        />
        <Style.Button type="submit" disabled={isDisabled}>
          가입하기
        </Style.Button>
      </Style.Form>
      <Style.Text>
        아이디가 있으신가요?
        {/* <Link to="/login">로그인하기</Link> */}
      </Style.Text>
    </Style.Container>
  );
};

export default SignupForm;
