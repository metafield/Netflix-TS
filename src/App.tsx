import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from './enums/routes';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.SIGN_IN}>
          <p>I will be the sign in page</p>
        </Route>
        <Route path={Routes.SIGN_UP}>
          <p>I will be the sign up page</p>
        </Route>
        <Route path={Routes.BROWSE}>
          <p>I will be the browse page</p>
        </Route>
        <Route path={Routes.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
