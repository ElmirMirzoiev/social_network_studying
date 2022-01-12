// import userImg from '../assets/images/user.png'
// import {createSlice} from "@reduxjs/toolkit";
//
// const initialState = {
//     userProfile: null,
//     newPostText: '',
//     postData: [
//         {
//             id: 1,
//             img: <img src={userImg} alt='ava'/>,
//             message: 'It is my first post!',
//             likesCount: 0
//         },
//         {
//             id: 2,
//             img: <img src={userImg} alt='ava'/>,
//             message: 'It is my first post!',
//             likesCount: 0
//         }
//     ]
// };
//
// const profileSlice = createSlice({
//     name: 'Profile',
//     initialState: initialState,
//     reducers: {
//         setUserProfile(state, action) {
//             state.userProfile = action.payload
//         },
//         addPost(state, action) {
//             state.postData.push(action.payload)
//         },
//     },
// })
//
//
// export default profileSlice.reducer;
//
// export const {setUserProfile} = profileSlice.actions