import React from 'react';
import Button from "@mui/material/Button";
import {Preloader} from "../../../../sharedComponents/Preloader/Preloader";
import styles from './Friends.module.scss';

const Friends = (props) => {

    const friendElement = props.friends.map(friend => <li key={friend.id} className={styles.friendItem}>
        <img alt={'user'} src={friend.photos.large}/>
        <div className={styles.userName}>
            {friend.name}
        </div>
        <Button> unfollow </Button>
        <div className={styles.userStatus}>
            {friend.status
                ? <span>{friend.status}</span>

                :  <span>No available status</span>}
        </div>
    </li>)

    return (
        <div className={styles.container}>
            {
                props.isLoading

                    ? <Preloader/>

                    : <ul className={styles.friendsList}> {friendElement} </ul>
            }
        </div>
    );
};


export default Friends;