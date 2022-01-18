import {ADD_POST, SET_USER_PROFILE, UPDATE_POST_TEXT} from "../types";
import {ProfileAPI} from "../../API/profileAPI";
import userImg from '../../assets/images/user.png'

let initialState = {
    userProfile: null,
    newPostText: '',
    postData: [
        {
            id: 1,
            img: <img src={userImg} alt='ava'/>,
            message: 'It is my first post!',
            likesCount: 0
        },
        {
            id: 2,
            img: <img src={userImg} alt='ava'/>,
            message: 'It is my first post!',
            likesCount: 0
        }
    ]
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            let newPost = {
                id: 3,
                img: <img src={userImg} alt='ava'/>,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const updatePostText = (text) => ({type: UPDATE_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserProfileThunk = (id) => {
    return (dispatch) => {
        ProfileAPI.getProfileData(id)
            .then(data => {
                setTimeout(() => {
                    dispatch(setUserProfile(data))
                }, 500)
            })
    }
}

export default profileReducer;