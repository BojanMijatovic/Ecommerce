import React from 'react';
import './SignInAndUpPage.styles.scss';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';

const signInAndUpPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default signInAndUpPage;
