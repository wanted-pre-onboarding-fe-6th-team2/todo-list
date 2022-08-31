import { Global } from '@emotion/react';
import resetCss from 'styles/global';
import TodoList from 'components/todo/TodoList';

const App = () => (
  <div>
    <Global styles={resetCss}></Global>
    <TodoList />
  </div>
);

export default App;
