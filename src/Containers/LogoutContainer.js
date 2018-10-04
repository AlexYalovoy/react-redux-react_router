import {LOGOUT, actionGenerator} from '../Actions';
import { connect } from 'react-redux';
import React, {Component} from 'react';
import Logout from '../Components/Logout';

class LogoutContainer extends Component {
  constructor(props) {
    super(props);
    this.logoutHandler = this.logoutHandler.bind(this);
  }
  logoutHandler() {
    localStorage.removeItem('user');
    this.props.logout();
  }
  render() {
    return (
      <Logout logoutHandler = {this.logoutHandler} isAuth = {this.props.isAuth}/>
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
    logout: () => dispatch( actionGenerator(LOGOUT) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer)