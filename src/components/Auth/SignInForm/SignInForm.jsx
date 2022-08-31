import { useInput } from 'hooks/useInput';
import * as Styled from './SignInForm.styled';

const SignInForm = () => {
  const [email, onChangeEmail, isValidEmail] = useInput({
    initialValue: '',
    minLength: 1,
    type: 'email',
  });

  const [password, onChangePassword, isValidPassword] = useInput({
    initialValue: '',
    minLength: 8,
  });

  const isValidForm = isValidEmail && isValidPassword;

  const handleSignIn = async (e, email, password) => {
    e.preventDefault();
    const signInResponse = await AuthApiService.signIn({ email, password });
    if (signInResponse.status === 200) {
      // 토큰 등록
      localStorage.setItem('token', signInResponse.accessToken);
      // 리다이렉트
      //navigate('/todo');
    } else if (signInResponse.status === 404) {
      // 404 사용자 존재x
      alert('존재하지 않는 사용자 입니다.');
    }
  };

  return (
    <Styled.SignLayoutWrapper onSubmit={e => handleSignIn(e, email, password)}>
      <h3>로그인</h3>
      <Styled.InputWrapper>
        <Styled.Input type="text" value={email} onChange={onChangeEmail} />
        {!isValidEmail && email.length > 0 && <p>@을 포함해 주세요.</p>}
      </Styled.InputWrapper>
      <Styled.InputWrapper>
        <Styled.Input type="password" value={password} onChange={onChangePassword} />
        {!isValidPassword && password.length > 0 && <p>8자리 이상 입력해 주세요.</p>}
      </Styled.InputWrapper>
      <Styled.SubmitBtn type="submit" isAllow={isValidForm} disabled={!isValidForm}>
        로그인
      </Styled.SubmitBtn>
    </Styled.SignLayoutWrapper>
  );
};

export default SignInForm;
