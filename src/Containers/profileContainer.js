import React from 'react';
import Profile from '../Components/Profile';
import {connect} from 'react-redux';
import {GET_PROFILE, actionGenerator} from '../Actions';
import isEmpty from '../helpers/isEmpty';

const ProfileContainer = (props) =>  {
  const {profile} = props;

  if ( isEmpty(profile) ) { // Если информации в профиле нет
    const xhr = new XMLHttpRequest();
    const url = 'https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/';
    const id = props.id;

    xhr.open('get', url + id);
    xhr.onload = () => {
      const response = JSON.parse(xhr.response) ;
      props.getProfile(response.data); // Занести ее в стор
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