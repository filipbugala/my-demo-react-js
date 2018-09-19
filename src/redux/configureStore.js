import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(
  thunk,
  promise({})
));