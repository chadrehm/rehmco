import { createStore, applyMiddleware, compose, combineReducers, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

export const configureStore = history => {
  const store = createStore(
    connectRouter(history)(combineReducers(reducers)),
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        reduxThunk,
      ),
    ),
  );

  return store;
}
