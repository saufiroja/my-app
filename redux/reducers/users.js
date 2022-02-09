import { LOGIN_USER, REGISTER_USER} from "../constants/users";

const initialState = {
    user: null,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload
            }

        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
}