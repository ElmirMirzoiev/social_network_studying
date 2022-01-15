import {IS_AUTH} from "./types";


const initialState = {
    isAuth: true
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                isAuth: action.payload,
            }
        default:
            return state
    }
}

