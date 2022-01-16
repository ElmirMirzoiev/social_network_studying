import {useDispatch, useSelector} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import React, {useEffect} from "react";
import {setUserProfile, setUserProfileThunk} from "../../../store/profileReducer";
import {useParams} from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const ProfileInfoContainer = () => {

    const profileData = useSelector(state => state.profilePage.userProfile)
    const dispatch = useDispatch();
    const params = useParams()

    useEffect(() => {
        dispatch(setUserProfileThunk(params.id))
        return function cleanup() {
            dispatch(setUserProfile(null))
        };
    }, [dispatch, params])

    // if (!profileData) {
    //     return <Preloader/>
    // }

    // {!profileData && (
    //
    // )}

    return (
        <>
            <ProfileInfo profileData={profileData}/>
            <MyPostsContainer/>
        </>
    )
}

export default ProfileInfoContainer;