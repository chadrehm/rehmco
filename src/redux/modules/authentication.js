import axios from 'axios';

const ROOT_URL = 'http://localhost:5100';

const types = {
  AUTH_USER: '@rehmco/AUTH_USER',
  UNAUTH_USER: '@rehmco/UNAUTH_USER',
  AUTH_ERROR: '@rehmco/AUTH_ERROR',
}

export const actions = {
  signinUser: ({ email, password }) => {
    return dispatch => {
      // Submit email and pass to server
      axios.post(`${ROOT_URL}/signin`, { email, password })
        .then(response => {
          // -Update state to indicate user is authenticated
          dispatch({ type: types.AUTH_USER });
          // -Save the JWT token
          localStorage.setItem('token', response.data.token);
          // -redirect to the route '/feature'
          
        })
        .catch(() => {
          // -Show an error to the
          dispatch(actions.authError('Bad Login Info'));
        });
    }
  },
  signupUser: ({ email, password }) => {
    return dispatch => {
      // Submit email and pass to server
      axios.post(`${ROOT_URL}/signup`, { email, password })
        .then(response => {
          // -Update state to indicate user is authenticated
          dispatch({ type: types.AUTH_USER });
          // -Save the JWT token
          localStorage.setItem('token', response.data.token);
          // -redirect to the route '/feature'

        })
        .catch(reply => {
          // -Show an error to the
          dispatch(actions.authError(reply.response.data.error));
        });
    }
  },
  signoutUser: () => {
    localStorage.removeItem('token');
    return { type: types.UNAUTH_USER };
  },
  authError: error =>
    ({
      type: types.AUTH_ERROR,
      payload: error,
    }),
}