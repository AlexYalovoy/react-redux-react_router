import React from 'react';
import Profile from '../Components/Profile';
import {connect} from 'react-redux';
import { setProfile } from '../Actions';
import isEmpty from '../helpers/isEmpty';

const ProfileContainer = (props) =>  {
  const {profile, id} = props;

  if ( isEmpty(profile) ) 
    props.setProfile(id)

  return (
    <Profile profile = {profile} />
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    id: state.auth.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (id) => setProfile(dispatch)(id)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);