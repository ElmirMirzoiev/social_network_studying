import MyPosts from "./MyPosts";
import {useSelector} from "react-redux";


const MyPostsContainer = () => {

    const postData = useSelector(state => state.profilePage.postData);
    const newPostText = useSelector(state => state.profilePage.newPostText)

    return (
        <>
            <MyPosts postData={postData}
                     newPostText={newPostText}
            />
        </>
    )

}

export default MyPostsContainer;