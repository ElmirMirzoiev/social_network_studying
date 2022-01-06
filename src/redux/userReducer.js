import {FOLLOW_USER, SET_CURRENT_PAGE, SET_USERS_DATA, UNFOLLOW_USER} from "./types";

let initialState = {
    users: [],
    pageSize: 20,
    error: null,
    totalCount: null,
    currentPage: 1
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
                users:  action.users,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
               currentPage: action.currentPage
            }
        default:
            return state;
    }

}

export const followAC = (id) => ({type: FOLLOW_USER, id})
export const unfollowAC = (id) => ({type: UNFOLLOW_USER, id})
export const setUsersDataAC = (users, totalCount) => ({type: SET_USERS_DATA, users, totalCount})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export default usersReducer;