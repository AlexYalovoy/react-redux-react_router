import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile';
import news from './news';

const reducer = combineReducers({
  auth,
  profile,
  news
});

export default reducer;