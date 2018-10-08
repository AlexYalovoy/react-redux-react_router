import React from 'react';

const Profile = (props) => {

  return (
    <div>
      <h2>Profile</h2>
      <p>Your information: {props.profile.city}</p>
    </div>
  )
};

export default Profile;