import { Global } from '@emotion/react';
import resetCss from 'styles/global';

const App = () => (
  <div>
    <Global styles={resetCss}></Global>
  </div>
);

export default App;
