import React from 'react';
import './SignIn.styles.scss';

import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

import { auth, signInWithGoogle } from '../../../src/firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmitForm = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
    this.setState({ email: '', password: '' });
  };

  onChangeInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.onSubmitForm}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.onChangeInput}
            label='email'
            required
          />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.onChangeInput}
            label='password'
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
