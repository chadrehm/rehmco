import { createStore, applyMiddleware, combineReducers, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

export const configureStore = history => {
  const store = createStore(
    connectRouter(history)(combineReducers({ ...reducers, form: formReducer })),
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        reduxThunk,
      ),
    ),
  );

  return store;
}
