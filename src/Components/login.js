import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
    this.submitHandler = this.submitHandler.bind(this);
  }
  users = [
    {
      login: 'admin',
      password: '12345'
    }
  ];

  submitHandler(event) {
    event.preventDefault();
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if ( this.users.every( (user) => (
      user.login !== login && user.password !== password) ? true: false 
    )) {
      return; // Если не найдено пользователя с такими данными 
    }

    this.setState({
      isAuth: true
    });
    localStorage.setItem('isAuth', 'true');
  }

  render() {
    if(this.state.isAuth) {
      return (
        <Redirect to='/profile' />
      );
    }

    return (
      <form>
        <input id = 'login' type='text' />
        <input id = 'password' type='password' />
        <input type='submit' onClick = {this.submitHandler}/>
      </form>
    );
  } 
};

export default Login;