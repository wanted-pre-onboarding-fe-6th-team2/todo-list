import { Global } from '@emotion/react';
import { ROUTES } from 'constants/route';
import { LOCALSTORAGE } from 'constants/localstorage';
import Signin from 'pages/Signin/Signin';
import Signup from 'pages/Signup/Signup';
import Todos from 'pages/Todos/Todos';
import { Routes, Route, Navigate } from 'react-router-dom';
import resetCss from 'styles/global';

const App = () => {
  const hasToken = !!localStorage.getItem(LOCALSTORAGE.ACCESS_TOKEN);
  return (
    <div>
      <Global styles={resetCss} />
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={hasToken ? <Navigate to={ROUTES.TODOS} /> : <Navigate to={ROUTES.SIGNIN} />}
        />
        <Route path={ROUTES.TODOS} element={<Todos />} />
        <Route path={ROUTES.SIGNIN} element={<Signin />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
