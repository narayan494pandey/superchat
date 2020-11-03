import React from 'react';
import {Home}  from './pages'
import * as ROUTES from './constants/routes'
import { BrowserRouter as Router, Route} from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path="/user">
        <p>hello I am user</p>
      </Route>
    </Router>
  );
}
