import React from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
