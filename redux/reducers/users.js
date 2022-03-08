<<<<<<< HEAD
import { CLEAR_STATE, FORGOT_PASSWORD, LOGIN_USER, REGISTER_USER, UPDATE_PROFILE } from "../constants/users";

const initialState = {
    user: null,
    isLoading: false,
    error: "",
    redirect: false,
    forgotPassword: false
}
=======
import {
  CLEAR_STATE, FORGOT_PASSWORD, LOGIN_USER, REGISTER_USER, UPDATE_PROFILE,
} from '../constants/users';

const initialState = {
  user: null,
  isLoading: false,
  error: '',
  redirect: false,
  forgotPassword: false,
};
>>>>>>> main

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload.data,
        isLoading: action.payload.loading,
        error: action.payload.error,
        // redirect: action.payload.redirect
      };

    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.data,
        isLoading: action.payload.loading,
        error: action.payload.error,
        redirect: action.payload.redirect,
      };

<<<<<<< HEAD
        case FORGOT_PASSWORD:
            return{
                ...state,
                forgotPassword: action.payload.data,
                isLoading: action.payload.loading,
                error: action.payload.error,
                redirect: action.payload.redirect
            }
=======
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPassword: action.payload.data,
        isLoading: action.payload.loading,
        error: action.payload.error,
        redirect: action.payload.redirect,
      };

    case CLEAR_STATE:
      return {
        ...state,
        user: action.payload.user,
        redirect: action.payload.redirect,
      };
>>>>>>> main

    default:
      return state;
  }
};
