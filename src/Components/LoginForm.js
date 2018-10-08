import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }


  render() {
    const emailValue = this.state.email;
    const passwordValue = this.state.password;
    return (
      <form>
        {this.props.errMsg && <p>{this.props.errMsg}</p>}
        <label htmlFor='email'>Email:</label>
        <input 
          id = 'email' name='email' 
          type='text' placeholder='Type your emai'
          onChange = {this.changeHandler}
          value = {emailValue}
        />
        <label htmlFor='password'>Password:</label>
        <input 
          id = 'password' name='password' 
          type='password' placeholder='Type your password'
          onChange = {this.changeHandler}
          value = {passwordValue}
        />
        <input 
          type='submit' value='Login' 
          onClick = {this.props.submitHandler}
        />
      </form>
    )
  }
}

export default Login;