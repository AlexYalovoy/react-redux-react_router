import React, { Component } from 'react';
import {Switch, Route, Link, Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Components/Home';
import News from './Components/News';
import ProfileContainer from './Containers/profileContainer';
import PrivateRoute from './Containers/privateContainer';
import LoginContainer from './Containers/LoginContainer';
import LogoutContainer from './Containers/LogoutContainer';

const history = createBrowserHistory();

class App extends Component {
  // Сделано: авторизация и переход к профилю, 
  //          просмотрена реализация примера, 
  //          переделать авторизацию с диспатчами, 
  //          проверку заполнения формы входа,
  //          сделать кнопку выхода из профиля
  // TODO:    дизайн страницы
  render() {
    return (
      <Router history={history}>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><LogoutContainer/></li>
          </ul>

          <hr/>
          
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/news' component={News}/>
            <Route path="/login" component={LoginContainer} />
            <PrivateRoute path="/profile" component={ProfileContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
