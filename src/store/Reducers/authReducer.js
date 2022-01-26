import { IS_AUTH, SET_AUTH_DATA } from "../types"
import { authAPI } from "../../API/authAPI"

const initialState = {
  email: null,
  login: null,
  id: null,
  isAuth: true,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      }
    case IS_AUTH:
      return {
        ...state,
        isAuth: false,
      }
    default:
      return state
  }
}

export const setAuthData = (payload) => ({ type: SET_AUTH_DATA, payload })
export const setLogOut = () => ({ type: IS_AUTH })

export const setAuthDataThunk = () => {
  return (dispatch) => {
    authAPI.me().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setAuthData(response.data))
      }
      if (response.resultCode === 1) {
        console.log(response.messages)
      }
    })
  }
}

export const logInThunk = (email, password) => {
  return (dispatch) => {
    authAPI.login(email, password).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setAuthDataThunk())
      } else {
        console.log(response.messages)
      }
    })
  }
}

export const logOutThunk = () => {
  return (dispatch) => {
    authAPI.logout().then(dispatch(setLogOut()))
  }
}

export default authReducer
