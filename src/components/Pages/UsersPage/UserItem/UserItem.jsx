import React from 'react';
import {NavLink} from 'react-router-dom';
import userImg from '../../../../assets/images/user.png';
import styles from './UserItem.module.scss';
import UnfollowButton from "../../../../sharedComponents/Buttons/UnfollowButton";
import FollowButton from "../../../../sharedComponents/Buttons/FollowButton";

export const UserItem = ({users, followInProgress, dispatch}) => {

    const userElement = users.map((user) =>
        <li key={user.id} className={styles.userItem}>
            <NavLink to={'/profile/' + user.id}>
                <img alt='ava'
                     src={user.photos.small

                         ? user.photos.small

                         : userImg}
                />
            </NavLink>
            <span>{user.name}</span>
            <span>{'UniqueUrlName'}</span>

            {user.followed

                ? <UnfollowButton dispatch={dispatch}
                                  followInProgress={followInProgress}
                                  user={user}/>

                : <FollowButton dispatch={dispatch}
                                followInProgress={followInProgress}
                                user={user}/>}
        </li>);

    return (

        <ul className={styles.usersList}>
            {userElement}
        </ul>
    );
};

