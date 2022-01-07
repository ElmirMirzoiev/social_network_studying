import React from 'react';
import s from "./ProfileInfo.module.css";
import userImg from '../../../assets/images/user.png'
import Preloader from "../../Preloader/Preloader";


function ProfileInfo() {
    return (
        <div className={s.profile}>
            <Preloader/>
            <div className={s.profile}>
                <img alt='logo'
                     src={userImg}/>
            </div>
            <div className={s.descriptionBlock}>
                Description
            </div>
        </div>
    );
}

export default ProfileInfo;