import {LOGIN, LOGOUT, LOGIN_FAILURE} from '../Actions';

const user = JSON.parse( localStorage.getItem('user') );
const initialState = {
  user,
  errMsg: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, user: action.payload.user, errMsg: ''};
    case LOGIN_FAILURE:
      return { user: null, errMsg: action.payload.errMsg };
    case LOGOUT:
      return { user: null, errMsg: '' };
    default:
      return state;
  }
}

export default reducer;