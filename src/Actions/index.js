export const LOGIN = 'LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const GET_PROFILE = 'GET_PROFILE';
export const PROFILE_ERR = 'PROFILE_ERR';
export const SET_NEWS = 'SET_NEWS';

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
    case PROFILE_ERR:
      return {
        type: PROFILE_ERR
      }
    case SET_NEWS:
    
      return {
        type: SET_NEWS,
        payload: {
          news: params
        }
      }
    default:
      return {};
  }
}

export const setNews = (dispatch) => {
  return () => {
    //dispatch(requestPosts(subreddit))

    const request = new Promise( (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = 'https://mysterious-reef-29460.herokuapp.com/api/v1/news';

      xhr.open('get', url);

      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          const response = JSON.parse( this.response );
          switch (response.status) {
            case 'ok':
              resolve(response);
            break;
            default:
              reject();
            break;
          }
        }
      }
      
      xhr.onerror = reject;
      xhr.send();
    });

    request.then( response => 
              dispatch({
                type: SET_NEWS,
                payload: response.data
              })
            )
            .catch( err => console.log(err) );

    
  }
}