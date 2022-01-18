import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {useDispatch} from "react-redux";
import {addPost, updatePostText} from "../../../store/Reducers/profileReducer";


const MyPosts = (props) => {

    const dispatch = useDispatch();

    const postElement = props.postData.map(p => <Post key={p.id}
                                                      img={p.img}
                                                      message={p.message}
                                                      likesCount={p.likesCount}/>)
    const addNewPost = () => {
        dispatch(addPost());
    }
    const onPostChange = (e) => {
        dispatch(updatePostText(e.target.value)
        )
    }

    return (
        <div className={s.MyPosts}>
            <h2> My posts </h2>
            <div>
                <textarea className={s.input}
                          placeholder='Enter your message'
                          value={props.newPostText}
                          onChange={onPostChange}/>
            </div>

            <span>
                <button onClick={addNewPost} className={s.btn}>Add</button>
            </span>
            <span>
                <button className={s.btn}>Remove</button>
            </span>
            <div className={s.postItem}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;