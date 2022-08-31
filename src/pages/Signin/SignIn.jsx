import AuthApiService from 'api/auth';
import SignInForm from 'components/Auth/SignInForm/SignInForm';
import { Container } from './SignIn.styled';

const SignInPage = () => {
  const handleSignIn = async (e, email, password) => {
    e.preventDefault();
    const signInResponse = await AuthApiService.signIn(email, password);
    if (signInResponse.status === 200) {
      // 토큰 등록
      localStorage.setItem('token', signInResponse.accessToken);
      // 리다이렉트
      //navigate('/todo');
    } else if (signInResponse.status === 404) {
      // 404 사용자 존재x
      alert('존재하지 않는 사용자 입니다.');
    } else if (signInResponse.status === 401) {
      // 401 비밀번호 틀림
      alert('사용자 정보가 일치하지 않습니다.');
    }
  };

  return (
    <Container>
      <SignInForm submitHandler={handleSignIn} />
    </Container>
  );
};

export default SignInPage;
