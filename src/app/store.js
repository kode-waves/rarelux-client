import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
//   import auth from "./reducers/auth";
  import user from "../Reducers/user";
 
  // import Cookie from 'js-cookie';
  
  const reducer = combineReducers({
    // auth: auth,
    user: user,
  });
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
  export default store;
  