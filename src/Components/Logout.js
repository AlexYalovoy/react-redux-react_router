import React, {Component} from 'react';
import { Redirect } from '../../node_modules/react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props);
    const isAuth = localStorage.getItem('isAuth') === 'true'
    this.state = {
      isAuth
    };
    this.LogoutHandler = this.LogoutHandler.bind(this);
  }

  LogoutHandler() {
    localStorage.setItem('isAuth', 'false');
    this.setState({
      isAuth: !this.state.isAuth
    });
  }

  render() {
    const isAuth = this.state.isAuth;

    if (isAuth) {
      return (
        <button onClick={this.LogoutHandler}>Logout</button>
      )
    }
    return (
      <div>
        <p>You are not Logged in</p>
        <Redirect to ='/' />
      </div>
      
    );
  }
}

export default Logout;