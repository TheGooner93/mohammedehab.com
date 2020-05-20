import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import loadReducer from './loaderReducer';

export default combineReducers({ theme : themeReducer, loader: loadReducer });