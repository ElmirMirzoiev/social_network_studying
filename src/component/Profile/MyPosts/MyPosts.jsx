import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post';


function MyPosts(props) {

    let state = props.profilePage;
    //
    let postElement = state.postData.map(p => <Post img={p.img}
                                                    message={p.message}
                                                    likesCount={p.likesCount}/>)
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value
        props.onPostChange(text);
    }
    return (
        <div className={s.MyPosts}>
            <h2> My posts </h2>
            <div>
                <textarea className={s.input}
                          placeholder='Enter your message'
                          onChange={onPostChange}
                          value={state.newPostText}/>
            </div>
            <div>
                <button onClick={addPost} className={s.btn}>Add</button>
                <button className={s.btn}>Remove</button>
            </div>
            <div className={s.postItem}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts;