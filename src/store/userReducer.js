import {FOLLOW_USER, SET_CURRENT_PAGE, SET_USERS_DATA, TOGGLE_IS_LOADING, UNFOLLOW_USER} from "./types";
import {UsersAPI} from "../API/usersAPI";

const initialState = {
    users: [
        {
            photos: null
        }
    ],
    pageSize: 21,
    error: null,
    totalCount: null,
    currentPage: 1,
    isLoading: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.id) {
                        return {...users, followed: true}
                    }
                    return users;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.id) {
                        return {...users, followed: false}
                    }
                    return users;
                })
            }
        case SET_USERS_DATA:
            return {
                ...state,
                users: action.users,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }

}

export const follow = (id) => ({type: FOLLOW_USER, id})
export const unfollow = (id) => ({type: UNFOLLOW_USER, id})
export const setUsersData = (users, totalCount) => ({type: SET_USERS_DATA, users, totalCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading})

export const setUsersThunk = (currentPage) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(true))
        UsersAPI.getUsersData(currentPage).then(data => {
            setTimeout(() => {
                dispatch(setUsersData(data.items, data.totalCount))
                dispatch(toggleIsLoading(false))
            }, 500)
        })
    }
}

export default usersReducer;
