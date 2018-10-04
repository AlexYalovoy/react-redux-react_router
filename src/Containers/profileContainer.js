import React from 'react';
import Profile from '../Components/Profile';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

const ProfileContainer = (props) =>  {
  const {user} = props;
  return (
    <Profile user = {user} />
  )
}

export default connect(mapStateToProps)(ProfileContainer);