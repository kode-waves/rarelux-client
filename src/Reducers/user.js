import {
    ADD_USER,
    EDIT_USER,
  } from "../Actions/user";
  
  export default function allUser(state = {
    isFetching: true,
    isSucess: false,
    payload: [],
  }, action) {
    switch (action.type) {
      case EDIT_USER:
        return Object.assign({}, state, {
          isSucess: action.isSucess,
          msg: action.payload.resMsg,
        });
      case ADD_USER:
        return Object.assign({}, state, {
            isSucess: action.isSucess,
          msg: ''
        });
      default:
        return state;
    }
  }