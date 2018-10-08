import React, { Component } from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Components/Home';
import News from './Components/News';
import ProfileContainer from './Containers/profileContainer';
import PrivateRoute from './Containers/privateContainer';
import LoginFormContainer from './Containers/LoginFormContainer';
import './Css/app.css';
import ButtonList from './Components/ButtonList';

const history = createBrowserHistory();

class App extends Component {
  // Сделано: авторизация и переход к профилю, 
  //          просмотрена реализация примера, 
  //          переделать авторизацию с диспатчами, 
  //          проверку заполнения формы входа,
  //          сделать кнопку выхода из профиля,
  //          что нужно хранить в redux
  // TODO:    дизайн страницы, propTypes, 404 page, работа с дом в реакте?, bind не нужен?, использовать middleware?
  render() {
    return (
      <Router history={history}>
        <div>
          <ButtonList />
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/news' component={News}/>
            <Route path="/login" component={LoginFormContainer} />
            <PrivateRoute path="/profile" component={ProfileContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
