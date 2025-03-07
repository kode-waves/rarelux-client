// reducers/settingsReducer.js
const initialState = {
    theme: 'dark',
  };
  
  const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_THEME':
        return {
          ...state,
          theme: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default settingsReducer;
  