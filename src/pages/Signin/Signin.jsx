import SignInForm from 'components/SigninForm/SigninForm';
import PageContainer from 'components/PageContainer/PageContainer';
import { LOCALSTORAGE } from 'constants/localstorage';
import { ROUTES } from 'constants/route';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCALSTORAGE.ACCESS_TOKEN);

    if (accessToken) navigate(ROUTES.TODOS);
  }, [navigate]);
  return (
    <PageContainer>
      <SignInForm />
    </PageContainer>
  );
};

export default Signin;
