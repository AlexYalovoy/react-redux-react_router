import {SET_PROFILE, PROFILE_ERR} from '../Actions';

const initialState = {
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_PROFILE:
      const info = action.payload;
      const city = info.city;
      const languages = info.languages;
      
      // Помещение ссылки на сайт на первое место
      const socials = info.social.reduce( (accumulator, soc) => {
        if (soc.label === 'web') {
          return [soc, ...accumulator];
        }
        return [...accumulator, soc];
      }, []);

      const profile = {city, languages, socials};
      return { ...profile }

    case PROFILE_ERR:
      return { err: 'User not found' }
    default:
      return state;
  }
}

export default reducer;