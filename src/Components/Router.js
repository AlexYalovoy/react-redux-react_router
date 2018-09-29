import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Home';
import News from './News';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';
import Login from './login';

const history = createBrowserHistory;

class Router extends Component {
  // Реализована проверка на установленный ключ isAuth
  // TODO: Сделать авторизацию => переход к странице профиля
  // И выход из профиля
  // + почитать Api react-router
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>

          <hr/>
          
          <Route exact path='/' component={Home}/>
          <Route exact path='/news' component={News}/>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
