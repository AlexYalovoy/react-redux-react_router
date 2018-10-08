import {GET_PROFILE} from '../Actions';

const initialState = {
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, ...action.payload.profile }
    default:
      return state;
  }
}

export default reducer;