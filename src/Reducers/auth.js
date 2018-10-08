import {LOGIN, LOGOUT} from '../Actions';

const user = JSON.parse( localStorage.getItem("user") );
const initialState = {
  user
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, user: action.payload.user};
    case LOGOUT:
      return {...state, user: null };
    default:
      return state;
  }
}

export default reducer;