import {ADD_POST, UPDATE_POST_TEXT} from "./types";
import userImg from '../assets/images/user.png'

let initialState = {
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
                id: 6,
                img: <img src={userImg} alt='ava'/>,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, newPost],
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text
    }
};

export default profileReducer;