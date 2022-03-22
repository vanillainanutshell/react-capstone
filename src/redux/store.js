import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = combineReducers({

});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
