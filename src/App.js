import React from 'react';
import './App.scss';
import HomePage from './pages/homepage/HomePage';

import { Router, Route, browserHistory, Switch } from 'react-router';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
