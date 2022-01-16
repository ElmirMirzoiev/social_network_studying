import React from 'react';
import styles from "./ProfileInfo.module.scss";
import userImg from '../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../../assets/Preloader/Preloader";


const ProfileInfo = (props) => {

    const data = props.profileData;

    return (
        <div className={styles.container}>
            {!data
                ? <div className={styles.preloader}>
                    <Preloader/>
                </div>

                : <div className={styles.profileInfo}>
                        <img alt='logo'
                             src={!!data.photos.large
                                 ? data.photos.large
                                 : userImg}/>
                        <ul>
                            <li>{`Name: ${data.fullName}`}</li>
                            <li>{`AboutMe: ${data.aboutMe}`}</li>
                            <li>{`Instagram: ${data.contacts.instagram}`}</li>
                            <li>{`Vk: ${data.contacts.vk}`}</li>
                            <li>{`Github: ${data.contacts.github}`}</li>
                            <li>{`Twitter: ${data.contacts.twitter}`}</li>
                        </ul>
                    </div>}
                    <div className={styles.status}>
                        <ProfileStatus/>
                    </div>
        </div>
    );
}

export default ProfileInfo;