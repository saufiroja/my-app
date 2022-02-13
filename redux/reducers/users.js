import { LOGIN_USER, REGISTER_USER, UPDATE_PROFILE } from "../constants/users";

const initialState = {
    user: null,
    isLoading: false,
    error: "",
    redirect: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload.data,
                isLoading: action.payload.loading,
                error: action.payload.error,
                redirect: action.payload.redirect
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
                user: action.payload,
                isLoading: action.payload.loading,
                error: action.payload.error,
                redirect: action.payload.redirect
            }
        default:
            return state;
    }
}