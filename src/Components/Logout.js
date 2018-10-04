import React from 'react';

const Logout = (props) => {
  const isAuth = props.isAuth;

  if (isAuth) {
    return (
      <button onClick={props.logoutHandler}>Logout</button>
    )
  }

  return (
    <div>
      <p>You are not Logged in</p>
    </div>  
  );

}

export default Logout;