import React from 'react';
import '../Css/logout.css';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Logout = (props) => {
  const isAuth = props.isAuth;

  if (isAuth) {
    return (
      <div id='logout'>
        <Button onClick={props.logoutHandler}>Logout</Button>
      </div>
    )
  }

  return (
    <div id='logout'>
      <Link to='/login'><Button>Login</Button></Link>
    </div>  
  );

}

export default Logout;