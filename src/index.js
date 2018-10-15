import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './Reducers'
 
const storage = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)) );

ReactDOM.render(
  <Provider store = {storage}>
    <App />
  </Provider>, 
  document.getElementById('root'));

registerServiceWorker();
