import { Global } from '@emotion/react';
import SignUp from 'pages/Signup/SignUp';
import resetCss from 'styles/global';

const App = () => (
  <div>
    <Global styles={resetCss}></Global>
    <SignUp />
  </div>
);

export default App;
