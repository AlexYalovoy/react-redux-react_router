import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './Reducers'

const storage = createStore(reducer);

ReactDOM.render(
  <Provider store = {storage}>
    <App />
  </Provider>, 
  document.getElementById('root'));

registerServiceWorker();
