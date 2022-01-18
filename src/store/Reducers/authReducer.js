import {IS_AUTH, SET_AUTH_DATA} from "../types";
import {authAPI} from "../../API/authAPI";


const initialState = {
    // id: 21568,
    // id: null,
    // email: null,
    // login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                isAuth: action.payload,
            }
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
};

export const setAuthData = (data) => ({type: SET_AUTH_DATA, data});

export const setAuthDataThunk = () => {
    return (dispatch) => {
        // dispatch(toggleIsLoading(true))
        authAPI.getAuthData().then(response => {
            if (response.resultCode === 0)
                dispatch(setAuthData(response.data))
            // setTimeout(() => {
            //     dispatch(toggleIsLoading(false))
            // }, 500)
        })
    }
};

export default authReducer;