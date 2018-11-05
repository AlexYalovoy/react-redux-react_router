import {connect} from 'react-redux';
import {login, actionGenerator, CLEAR_ERR} from '../Actions'
import React, {Component} from 'react';
import LoginForm from '../Components/LoginForm';
import { Redirect } from '../../node_modules/react-router-dom';
import PropTypes from 'prop-types';

class LoginContainer extends Component {
  state = {
    email: '',
    password: ''
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.errMsg && !this.props.errMsg) { // Стирание пароля после отображения ошибки
      this.setState({
        password: ''
      })
      return true;
    }

    // Стирание ошибки после начала печати
    if ( this.isStartTyping(nextState) )
      this.props.clearErr();
    return true;
  }

  isStartTyping = (nextState) => {
    return this.props.errMsg && ( (nextState.password !== this.state.password) && nextState.password || nextState.email !== this.state.email)
  }

  changeHandler = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    const {from} = this.props.location.state || {from: { pathname: '/' }}
    if (this.props.user) {
      return (
        <Redirect to={from} />
      )
    }
    const {email, password} = this.state;
    const {errMsg, login } = this.props;
    const changeHandler = this.changeHandler;

    return (
      <div>
        <LoginForm 
          errMsg = {errMsg} 
          email = {email}
          password = {password}
          changeHandler = {changeHandler} 
          login = {login}
        />
      </div>
    )
  }
}

const mapStateToPtops = (state) => {
  return {
    user: state.auth.user,
    errMsg: state.auth.errMsg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (e, state) => login(dispatch)(e, state),
    clearErr: () => dispatch( actionGenerator(CLEAR_ERR) )
  }
}

LoginContainer.propTypes = {
  location: PropTypes.object,
  user: PropTypes.object,
  errMsg: PropTypes.string,
  login: PropTypes.func,
  clearErr: PropTypes.func
}

export default connect(mapStateToPtops, mapDispatchToProps)(LoginContainer)