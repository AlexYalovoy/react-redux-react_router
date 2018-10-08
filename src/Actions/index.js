export const LOGIN = 'LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const GET_PROFILE = 'GET_PROFILE';

export const actionGenerator = (type, params) => {
  switch (type) {
    case LOGIN:
      return {
        type: LOGIN, 
        payload: {
          user: params
        }
      } ;
    case LOGOUT:
      return {
        type: LOGOUT
      };
    case GET_PROFILE:
      return {
        type: GET_PROFILE,
        payload: {
          profile: params
        }
      }
    default:
      return {};
  }
}
