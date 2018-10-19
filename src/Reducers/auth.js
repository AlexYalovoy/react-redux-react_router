import {LOGIN, LOGOUT, LOGIN_ERR, CONNECTION_ERR, CLEAR_ERR} from '../Actions';
import {LOGIN_MSGS} from '../Const/Messages';

const user = JSON.parse( localStorage.getItem("user") );
const initialState = {
  user,
  errMsg: null
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case LOGIN:
      return { 
        errMsg: null,
        user: action.payload
      };
    case LOGOUT:
      return { 
        user: null,
        errMsg: null
      };
    case LOGIN_ERR:
      var key = action.payload.key; // var для возможности переопределения (использования такого же имени в другом кейсе)
      return {
        ...state, 
        errMsg: LOGIN_MSGS[key]
      }
    case CONNECTION_ERR: 
      var key = action.payload.key;
      return {
        ...state, 
        errMsg: LOGIN_MSGS[key]
      }
    case CLEAR_ERR:
      return {
        ...state,
        errMsg: null
      }
    default:
      return state;
  }
}

export default reducer;