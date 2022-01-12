import {useDispatch, useSelector} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import React, {useEffect} from "react";
import {ProfileAPI} from "../../../API/profileAPI";
import {setUserProfile} from "../../../store/profileReducer";
import Preloader from "../../Preloader/Preloader";
import {useParams} from "react-router-dom";


const ProfileInfoContainer = () => {

    const profileData = useSelector(state => state.profilePage.userProfile)
    const dispatch  = useDispatch();
    const params = useParams()


    useEffect(() => {
        ProfileAPI.getProfileData(params.id)
            .then(profile => {
            dispatch(setUserProfile(profile))
        })
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