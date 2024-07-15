import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    GET_USER_BY_ID,
  } from "../constants/actionType";
  
  const initialState = {
    userList: [],
    user: {},
    isLoading: false,
    error: [],
  };
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_USERS:
        return {
          ...state,
          isLoading: true
        };
      case GET_USERS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          userList: payload,
        };
        case GET_USERS_FAIL:
        return {
          ...state,
          isLoading: false,
          error: payload
        };
      case GET_USER_BY_ID:
        return {
          ...state,
          user: state.userList.filter(el => el.id === Number(payload))[0]
        };
        default:
          return state;
    }};
    
  export default userReducer 