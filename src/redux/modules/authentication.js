import axios from 'axios';

const ROOT_URL = 'https://polar-meadow-30216.herokuapp.com';

const types = {
  AUTH_USER: '@rehmco/AUTH_USER',
  UNAUTH_USER: '@rehmco/UNAUTH_USER',
  AUTH_ERROR: '@rehmco/AUTH_ERROR',
}

export const actions = {
  signinUser: (email, password, push) => dispatch => {
    // Submit email and pass to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // -Update state to indicate user is authenticated
        dispatch({ type: types.AUTH_USER });
        // -Save the JWT token
        localStorage.setItem('token', response.data.token);
        // -redirect to the route '/feature'
        push('/feature');
      })
      .catch(reply => {
        // -Show an error to the
        dispatch(actions.authError(reply.response.data.error));
      });
  },
  signupUser: (email, password, push) => dispatch => {
    // Submit email and pass to server
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        // -Update state to indicate user is authenticated
        dispatch({ type: types.AUTH_USER });
        // -Save the JWT token
        localStorage.setItem('token', response.data.token);
        // -redirect to the route '/feature'
        push('/feature');
      })
      .catch(reply => {
        // -Show an error to the
        dispatch(actions.authError(reply.response.data.error));
      });
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

export const defaultState = {
  error: '',
  authenticated: false,
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return { ...state, authenticated: true, error: ''};
    case types.UNAUTH_USER:
      return { ...state, authenticated: false, error: '' };
    case types.AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
