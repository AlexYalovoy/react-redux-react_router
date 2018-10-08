import React from 'react';
import Profile from '../Components/Profile';
import {connect} from 'react-redux';
import {GET_PROFILE, actionGenerator} from '../Actions';
import isEmpty from '../helpers/isEmpty';

const ProfileContainer = (props) =>  {
  const {profile} = props;
  const id = props.id;

  if ( isEmpty(profile) ) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`);
    xhr.onload = () => {
      const user = JSON.parse(xhr.response) ;
      props.getProfile(user.data);
    }
    xhr.send();
  }

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
    getProfile: (params) => dispatch( actionGenerator(GET_PROFILE, params) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);