import React from 'react';
import './SignIn.styles.scss';

import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmitForm = (e) => {
    e.preventDefault();
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

          <CustomButton type='submit'>sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
