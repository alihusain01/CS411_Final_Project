// userReducer.js
const initialState = {
    userName: null,
    firstName: null, 
    lastName: null // Initial state when the user is not logged in
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, ...action.payload };
      case 'LOGOUT':
        return { ...initialState };
      default:
        return state;
    }
  };
  
  
  export default userReducer;
  