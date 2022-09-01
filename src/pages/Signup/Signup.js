import React, { useEffect } from 'react';
import SignupForm from 'components/SignupForm';
import PageContainer from 'components/PageContainer';
import { useNavigate } from 'react-router-dom';
import { LOCALSTORAGE } from 'constants/localstorage';
import { ROUTES } from 'constants/route';

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCALSTORAGE.ACCESS_TOKEN);

    if (accessToken) navigate(ROUTES.TODOS);
  }, [navigate]);
  return (
    <PageContainer>
      <SignupForm />
    </PageContainer>
  );
};

export default Signup;
