//Core
import React from 'react';
import { loadCSS } from 'fg-loadcss';
import {
  Route,
  Switch,
} from 'react-router-dom';
//Components
import DefaultLayout from './components/DefaultLayout';
import SignInPage from './pages/SignInPage';

function App() {

  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <SignInPage />
      </Route>
      <DefaultLayout/>
    </Switch>
  );
}

export default App;
