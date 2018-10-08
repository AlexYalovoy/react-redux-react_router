import React from 'react';

const Profile = (props) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>Your id: {props.user.id}</p>
    </div>
  )
};

export default Profile;