import {GET_PROFILE, PROFILE_ERR} from '../Actions';

const initialState = {
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...action.payload.profile }
    case PROFILE_ERR:
      return { err: 'User not found' }
    default:
      return state;
  }
}

export default reducer;