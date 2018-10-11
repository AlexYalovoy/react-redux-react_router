import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  render() {
    
    return (
      <form method='post' encType='application/json' action='https://mysterious-reef-29460.herokuapp.com/api/v1/validate'>
        {this.props.errMsg && <p>{this.props.errMsg}</p>}
        <label htmlFor='email'>Email:</label>
        <input 
          id = 'email' name='email' 
          type='text' placeholder='Type your emai'
          onChange = {this.props.changeHandler}
          value = {this.props.email}
        />
        <label htmlFor='password'>Password:</label>
        <input 
          id = 'password' name='password' 
          type='password' placeholder='Type your password'
          onChange = {this.props.changeHandler}
          value = {this.props.password}
        />
        <input 
          type='submit' value='Login' 
          onClick = {this.props.submitHandler}
        />
      </form>
    )
  }
}

Login.propTypes = {
  errMsg: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  changeHandler: PropTypes.func,
  submitHandler: PropTypes.func
}

export default Login;