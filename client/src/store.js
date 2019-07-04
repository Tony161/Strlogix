import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as reducers from './modules/reducers';

export const history = createBrowserHistory();

const createRootReducer = history =>
  combineReducers({
    ...reducers,
    router: connectRouter(history),
  });

const baseMiddleware = [promiseMiddleware, routerMiddleware(history)];

const middleware = [...baseMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  createRootReducer(history),
  {},
  composeEnhancers(applyMiddleware(...middleware)),
);
