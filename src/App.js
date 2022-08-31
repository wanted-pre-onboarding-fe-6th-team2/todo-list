import { Global } from '@emotion/react';
import { ROUTES } from 'constants/route';
import { LOCALSTORAGE } from 'constants/localstorage';
import Signin from 'pages/Signin/Signin';
import Signup from 'pages/Signup/Signup';
import Todos from 'pages/Todos/Todos';
import { Routes, Route, Navigate } from 'react-router-dom';
import resetCss from 'styles/global';

const App = () => {
  // localStorage.setItem(
  //   'token',
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGQzQG5hdmVyLmNvbSIsInN1YiI6MzQwOCwiaWF0IjoxNjYxOTQwMjY2LCJleHAiOjE2NjI1NDUwNjZ9.hcMONctw9EHIcPd1fCwr7pb2jkW_k7bJ388kmgPobws'
  // );
  const hasToken = !!localStorage.getItem(LOCALSTORAGE.ACCESS_TOKEN);
  return (
    <div>
      <Global styles={resetCss} />
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={hasToken ? <Navigate to={ROUTES.TODOS} /> : <Navigate to={ROUTES.SIGNIN} />}
        />
        <Route
          path={ROUTES.TODOS}
          element={hasToken ? <Todos /> : <Navigate to={ROUTES.SIGNIN} />}
        />
        <Route
          path={ROUTES.SIGNIN}
          element={hasToken ? <Navigate to={ROUTES.TODOS} /> : <Signin />}
        />
        <Route
          path={ROUTES.SIGNUP}
          element={hasToken ? <Navigate to={ROUTES.TODOS} /> : <Signup />}
        />
      </Routes>
    </div>
  );
};

export default App;
