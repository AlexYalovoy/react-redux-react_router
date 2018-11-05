import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
    const {errMsg, email, password, changeHandler, login} = props;
    const state = {email, password}
    
    return (
      <form method='post' encType='application/json' action='https://mysterious-reef-29460.herokuapp.com/api/v1/validate'>
        {errMsg && <p>{errMsg}</p>}
        <label htmlFor='email'>Email:</label>
        <input 
          id = 'email' name='email' 
          type='text' placeholder='Type your email'
          autoComplete="username email"
          onChange = {changeHandler}
          value = {email}
        />
        <label htmlFor='password'>Password:</label>
        <input 
          id = 'password' name='password' 
          type='password' placeholder='Type your password'
          autoComplete="current-password"
          onChange = {changeHandler}
          value = {password}
        />
        <input 
          type='submit' value='Login' 
          onClick = { (e) => login(e, state) }
        />
      </form>
    );
  
}

Login.propTypes = {
  errMsg: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  changeHandler: PropTypes.func,
  submitHandler: PropTypes.func
}

export default Login;