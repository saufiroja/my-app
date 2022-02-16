import { CLEAR_STATE, FORGOT_PASSWORD, HIDDEN_MODAL, LOGIN_USER, REGISTER_USER, SHOW_MODAL, UPDATE_PROFILE } from "../constants/users";

const initialState = {
    user: null,
    isLoading: false,
    error: "",
    redirect: false,
    forgotPassword: false,
    modal: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload.data,
                isLoading: action.payload.loading,
                error: action.payload.error,
                // redirect: action.payload.redirect
            }

        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.data,
                isLoading: action.payload.loading,
                error: action.payload.error,
                redirect: action.payload.redirect
            }
        
        case UPDATE_PROFILE:
            return{
                ...state,
                user: action.payload.data,
                isLoading: action.payload.loading,
                error: action.payload.error,
                redirect: action.payload.redirect
            }

        case FORGOT_PASSWORD:
            return{
                ...state,
                forgotPassword: action.payload.data,
                isLoading: action.payload.loading,
                error: action.payload.error,
                redirect: action.payload.redirect
            }
            
        case SHOW_MODAL:
            return{
                ...state,
                modal: action.payload
            }

        case HIDDEN_MODAL:
            return{
                ...state,
                modal: action.payload
            }

        case CLEAR_STATE:
            return{
                ...state,
                user: action.payload.user,
                redirect: action.payload.redirect
            }

        default:
            return state;
    }
}