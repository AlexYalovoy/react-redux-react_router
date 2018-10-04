import React, { Component } from 'react';
import {Switch, Route, Link, Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Home';
import News from './News';
import ProfileContainer from '../Containers/profileContainer';
import PrivateRoute from '../Containers/privateContainer';
import Login from './login';
import Logout from './Logout';

const history = createBrowserHistory();

class Routerr extends Component {
  // Сделана авторизация и переход к профилю, просмотрена реализация примера
  // TODO: сделать кнопку выхода из профиля, проверку заполнения формы входа, дизайн страницы
  render() {
    return (
      <Router history={history}>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Logout/></li>
          </ul>

          <hr/>
          
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/news' component={News}/>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/profile" component={ProfileContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routerr;
