import {useDispatch, useSelector} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import React, {useEffect} from "react";
import {setUserProfile, setUserProfileThunk} from "../../../store/profileReducer";
import Preloader from "../../Preloader/Preloader";
import {useParams} from "react-router-dom";


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

    if (!profileData) {
        return <Preloader/>
    }

    return (
        <>
            <ProfileInfo profileData={profileData}/>
        </>
    )
}

export default ProfileInfoContainer;