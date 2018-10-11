import {SET_NEWS} from '../Actions';

const initialState = {
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return { ...action.payload.news }
    default:
      return state;
  }
}

export default reducer;