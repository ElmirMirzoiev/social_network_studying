import {useDispatch, useSelector} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import React, {useEffect} from "react";
import {ProfileAPI} from "../../../API/profileAPI";
import {setUserProfile} from "../../../store/profileReducer";
import Preloader from "../../Preloader/Preloader";

const ProfileInfoContainer = () => {

    const profileData = useSelector(state => state.profilePage.userProfile)
    const dispatch  = useDispatch();

    useEffect(() => {
        ProfileAPI.getProfileData(`2`).then(profile => {
            dispatch(setUserProfile(profile))
        })
    }, [])

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