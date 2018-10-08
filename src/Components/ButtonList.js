import {Button} from '@material-ui/core';
import React  from 'react';
import {Link} from 'react-router-dom';
import LoginLogoutContainer from '../Containers/LoginLogoutContainer';
import '../Css/buttonList.css'

export default () => {
  return (
    <div id='header'>
      <Link to='/'><Button variant="raised" color="primary">Home</Button></Link>
      <Link to='/news'><Button variant="contained" color="primary">News</Button></Link>
      <Link to='/profile'><Button variant="contained" color="primary">Profile</Button></Link>
      <LoginLogoutContainer/>
    </div>
  )
}