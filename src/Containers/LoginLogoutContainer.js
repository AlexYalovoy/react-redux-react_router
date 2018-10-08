import {LOGOUT, actionGenerator} from '../Actions';
import { connect } from 'react-redux';
import React, {Component} from 'react';
import LoginLogout from '../Components/LoginLogout';

class LogoutContainer extends Component {
  render() {
    return (
      <LoginLogout logoutHandler = {this.props.logout} isAuth = {this.props.isAuth}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      localStorage.removeItem('user');
      dispatch( actionGenerator(LOGOUT) );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer)