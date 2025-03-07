// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer,
});

export default rootReducer;
