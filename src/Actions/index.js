export const LOGIN = 'LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SET_PROFILE = 'GET_PROFILE';
export const PROFILE_ERR = 'PROFILE_ERR';
export const SET_NEWS = 'SET_NEWS';
export const LOGIN_ERR = 'LOGIN_ERR';
export const CONNECTION_ERR = 'CONNECTION_ERR';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const CLEAR_ERR = 'CLEAR_ERR'

export const actionGenerator = (type, params) => {
  switch (type) {
    case CLEAR_ERR:
      return { type: CLEAR_ERR }
    case LOGOUT: 
      return { type: LOGOUT }
    default:
      return {};
  }
}

export const setNews = (dispatch) => {
  return () => {
    
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

export const setProfile = (dispatch) => {
  return (id) => {
    
    const request = new Promise( (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = 'https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/';

      xhr.open('get', url + id);
      
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse( this.response );
          switch (response.status) {
            case 'ok':
              resolve(response);
            break;
            default:
              reject(response);
            break;
          }
        }
      }
      
      xhr.onerror = reject;
      xhr.send();
    });

    request.then( response => 
              dispatch({
                type: SET_PROFILE,
                payload: response.data
              })
            )
            .catch( err => console.log(err) );

  }
}

export const login = (dispatch) => {
  return (e, credentials) => {
    e.preventDefault();
        
    const request = new Promise( (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const url = 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate';
      const {email, password} = credentials;
      const body = JSON.stringify({email, password});

      xhr.open('post', url);
      xhr.setRequestHeader('content-type', 'application/json');
      
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse( this.response );
          switch (response.status) {
            case 'ok':
              resolve(response);
              break;
            case 'err':
              reject(response);
              break;
            default:
              reject(response);
              break;
          }
        }
      }
      
      xhr.onerror = () => dispatch({
        type: CONNECTION_ERR,
        payload: {
          key: 'server_not_enable'
        }
      });
      xhr.send(body);
    });

    request.then( response => {
                localStorage.setItem("user", JSON.stringify(response.data));
                dispatch({
                  type: LOGIN,
                  payload: response.data
                })
              }
            )
            .catch( response => 
                    dispatch({
                      type: LOGIN_ERR,
                      payload: {
                        key: response.message
                      }
                    })
                  );

  }
}

export const clearErr = {
  type: CLEAR_ERR
}