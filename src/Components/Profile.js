import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>Your name: {props.user.name}</p>
    </div>
  )
};

export default Profile;