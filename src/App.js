import React from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndUpPage from './pages/signInAndUpPage/SignInAndUpPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndUpPage} />
      </Switch>
    </div>
  );
}

export default App;
