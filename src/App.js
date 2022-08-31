import { Global } from '@emotion/react';
import { ROUTES } from 'constants/route';
import Home from 'pages/Home/Home';
import Signin from 'pages/Signin/Signin';
import Signup from 'pages/Signup/Signup';
import Todos from 'pages/Todos/Todos';
import { Routes, Route, Navigate } from 'react-router-dom';
import resetCss from 'styles/global';

const App = () => {
  // checkToken : 토큰 유무를 확인 (default : true)
  const checkToken = !!localStorage.getItem('token');
  return (
    <Global styles={resetCss}>
      <Routes>
        <Route path={ROUTES.HOME} element={checkToken ? <Navigate to="/todo" /> : <Home />}></Route>
        <Route path={ROUTES.TODOS} element={checkToken ? <Todos /> : <Navigate to="/" />}></Route>
        <Route path={ROUTES.SIGNIN} element={<Signin />}></Route>
        <Route path={ROUTES.SIGNUP} element={<Signup />}></Route>
      </Routes>
    </Global>
  );
};

export default App;
