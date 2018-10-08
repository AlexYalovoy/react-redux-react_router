export const LOGIN = 'LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

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
    default:
      return {};
  }
}
