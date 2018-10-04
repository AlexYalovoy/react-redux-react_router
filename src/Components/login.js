import React from 'react';

const Login = (props) => {
  return (
    <form>
      {props.errMsg && <p>{props.errMsg}</p>}
      <input id = 'login' type='text' />
      <input id = 'password' type='password' />
      <input type='submit' onClick = {props.submitHandler}/>
    </form>
  )
}

export default Login;