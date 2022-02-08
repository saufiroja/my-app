import { REGISTER_USER } from "../constants/users";

const initialState = {
    user: null,
    isLoading: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload,
                isLoading: true
            }

        default:
            return state;
    }
}