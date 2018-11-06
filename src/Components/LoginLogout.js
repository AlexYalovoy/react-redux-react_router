import React from 'react';
import '../Css/login-logout.css';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginLogout = (props) => {
  const isAuth = props.isAuth;

  if (isAuth) {
    return (
      <div id='login-logout'>
        <Button onClick={props.logoutHandler}>Logout</Button>
      </div>
    )
  }

  return (
    <div id='login-logout'>
      <Link to='/login'><Button>Login</Button></Link>
    </div>  
  );

}

LoginLogout.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
  isAuth: PropTypes.object
}

export default LoginLogout;