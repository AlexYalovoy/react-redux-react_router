import React, { Component } from 'react';
import {Switch, Route, Router, HashRouter} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Components/Home';
import NewsContainer from './Containers/NewsContainer';
import ProfileContainer from './Containers/profileContainer';
import PrivateRoute from './Containers/privateContainer';
import LoginFormContainer from './Containers/LoginFormContainer';
import NotFoud from './Components/NotFound';
import './Css/app.css';
import ButtonList from './Components/ButtonList';

const history = createBrowserHistory();

class App extends Component {

  // TODO:    дизайн страницы, работа с дом в реакте?, bind не нужен?, использовать middleware?, 
  //          отправка пустой формы не разрешается + более жесткая валидация, 
  //          убрать из компонента изменение порядка картинок в редьюсер, 
  //          екшен login_request с блокировкой сабмита + прелоадер(компонентом), redux-thunk - для чего он нужен?
  //          выделить новость в отдельный компонент
  //          выносить url в отдельный файл с константами
  render() {
    return (
      <HashRouter history={history}>
        <div>
          <ButtonList />
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/news' component={NewsContainer}/>
            <Route path="/login" component={LoginFormContainer} />
            <PrivateRoute path="/profile" component={ProfileContainer} />
            <Route component={NotFoud} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
