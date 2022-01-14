import userImg from '../assets/images/user.png'
import {createSlice} from "@reduxjs/toolkit";
// import userImg from '../assets/images/user.png'


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
    // newPost: {
    //     id: 3,
    //     img: <img src={userImg} alt='ava'/>,
    //     message: state.newPostText,
    //     likesCount: 0
    // }
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setUserProfile(state, action) {
            state.userProfile = action.payload
        },
        updatePostText: {
            reducer: (state, action) => {
                state.newPostText = action.payload
            },

        }
        // addPost(state) {
        //     state.postData += state.newPost
        //     // postData: [...state.postData, newPost],
        //     state.newPostText = ''
        // }
    }
})

export const {updatePostText, setUserProfile} = profileSlice.actions
export default profileSlice.reducer;