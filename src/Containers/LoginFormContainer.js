import {connect} from 'react-redux';
import {actionGenerator, LOGIN} from '../Actions'
import React, {Component} from 'react';
import LoginForm from '../Components/LoginForm';
import { Redirect } from '../../node_modules/react-router-dom';
import PropTypes from 'prop-types';

class LoginContainer extends Component {
  state = {
    errMsg: '',
    email: '',
    password: ''
  }

  messages = {
    'wrong_email_or_password': 'Email или пароль введены неверно, попробуйте еще раз!',
    'server_not_enable': 'Сервер не доступен'
  }

  changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  submitHandler = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    const body = JSON.stringify({email, password});

    const xhr = new XMLHttpRequest();
    xhr.open('post', 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate')
    xhr.setRequestHeader('content-type', 'application/json');
    
    xhr.onload = () => {
      const response = JSON.parse(xhr.response);

      if (response.status === 'ok') {
        localStorage.setItem("user", JSON.stringify(response.data));
        this.props.login(response.data);
      }

      if (response.message === 'wrong_email_or_password') { // В случае ошибки логина
        this.setState({ 
          errMsg: this.messages['wrong_email_or_password'],
          password: ''
        }); 
      }
    }

    xhr.onerror = () => {
      this.setState({ 
        errMsg: this.messages['server_not_enable']
      });
    }

    xhr.send(body);
  }

  render() {
    const {from} = this.props.location.state || {from: { pathname: '/' }}
    if (this.props.user) {
      return (
        <Redirect to={from} />
      )
    }
    
    const {errMsg, email, password} = this.state;
    return (
      <div>
        <LoginForm 
          errMsg = {errMsg} 
          email = {email}
          password = {password}
          changeHandler = {this.changeHandler} 
          submitHandler = {this.submitHandler} 
        />
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
    login: (params) => dispatch( actionGenerator(LOGIN, params) ) 
  }
}

LoginContainer.propTypes = {
  location: PropTypes.object,
  user: PropTypes.object,
  login: PropTypes.func
}

export default connect(mapStateToPtops, mapDispatchToProps)(LoginContainer)