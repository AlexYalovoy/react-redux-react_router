import {SET_PROFILE, PROFILE_ERR} from '../Actions';

const initialState = {
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      const info = action.payload;
      const city = info.city;
      const languages = info.languages;
    
      const webIkon = info.social.filter( e => e.label === 'web' ? true : false );
      const restIkons = info.social.filter( e => e.label !== 'web' ? true : false );

      const socials = [...webIkon, ...restIkons];
      const profile = {city, languages, socials};

      return { ...profile }
    case PROFILE_ERR:
      return { err: 'User not found' }
    default:
      return state;
  }
}

export default reducer;