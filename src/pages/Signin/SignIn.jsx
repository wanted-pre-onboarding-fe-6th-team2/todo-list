import AuthApiService from 'api/auth';
import SignInForm from 'components/Auth/SignInForm/SignInForm';
import { Container } from './SignIn.styled';

const SignInPage = () => {
  return (
    <Container>
      <SignInForm />
    </Container>
  );
};

export default SignInPage;
