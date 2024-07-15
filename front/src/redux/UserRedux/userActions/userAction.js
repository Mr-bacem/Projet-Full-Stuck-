import axios  from "axios";
import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    GET_USER_BY_ID} from '../constants/actionType.js'


 export const getUsers = ()=> async dispatch => {
    dispatch({
        type: GET_USERS
    });
    try {
        const userArray = await axios.get (
            'https://jsonplaceholder.typicode.com/users'
        );
        dispatch ({
            type:GET_USERS_SUCCESS,
            payload : userArray.data
        })
      
    }  catch (error){
dispatch ({
    type:GET_USERS_FAIL,
    payload:error.response.data
})            
    }
 }    ;



 export const getUserById = id => dispatch => {
    dispatch({
      type: GET_USER_BY_ID,
      payload: id
    });
  };