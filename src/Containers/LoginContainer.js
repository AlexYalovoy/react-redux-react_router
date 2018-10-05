import {connect} from 'react-redux';
import {actionGenerator, LOGIN} from '../Actions'
import React, {Component} from 'react';
import Login from '../Components/Login';
import { Redirect } from '../../node_modules/react-router-dom';
import formValidation from '../helpers/FormValidation';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  state = {
    errMsg: ''
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

    if ( !formValidation(login, password, this.users) ) { // Если не найдено пользователя с такими данными 
      this.setState({
        errMsg: 'Проверьте правильность ввода логина или пароля'
      }); 
      return;
    }
    
    localStorage.setItem("user", JSON.stringify({name: login}));
    this.props.login(LOGIN, {user: {name: login}});
  }

  render() {
    if (this.props.user) {
      return (
        <Redirect to='/profile' />
      )
    }
    
    const {errMsg} = this.state;
    return (
      <div>
        <Login errMsg = {errMsg} submitHandler = {this.submitHandler} />
      </div>
    )
  }
}

const mapStateToPtops = (state) => {
  return {
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (type, params) => dispatch( actionGenerator(type, params) )
  }
}

export default connect(mapStateToPtops, mapDispatchToProps)(LoginContainer)