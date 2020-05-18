import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

const composeEnhancers = process.env.NODE_ENV === 'development' && typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  : compose;

const store = createStore(rootReducer, composeEnhancers);

export default store;