import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button, Pagination} from '@mui/material';
import userImg from '../../../assets/images/user.png';
import {followUserThunk, setCurrentPage, unfollowUserThunk} from '../../../store/Reducers/userReducer';
import Preloader from '../../../sharedComponents/Preloader/Preloader';
import styles from './Users.module.scss';

const Users = (props) => {

    const userElement = props.users.map((user) =>
        <li key={user.id} className={styles.userItem}>
            <NavLink to={'/profile/' + user.id}>
                <img alt='UserPhoto'
                     src={user.photos.small !== null
                         ? user.photos.small
                         : userImg}
                     className={styles.img}/>
            </NavLink>
            <span>{user.name}</span>
            <span>{'UniqueUrlName'}</span>


            {user.followed
                ? <Button variant="contained"
                          sx={{width: 80, margin: 1}}
                          size="small"
                          disabled={props.followInProgress.some(id => id === user.id)}
                          onClick={() =>
                              props.dispatch(unfollowUserThunk(user.id))}>
                    Unfollow
                </Button>
                : <Button variant="contained"
                          sx={{width: 80, margin: 1}}
                          size="small"
                          disabled={props.followInProgress.some(id => id === user.id)}
                          onClick={() =>
                              props.dispatch(followUserThunk(user.id))}>
                    Follow
                </Button>}
        </li>);

    const pagesTotal = Math.ceil(props.totalCount / props.pageSize);

    return (<div className={styles.container}>
        <div className={styles.pagination}>
            {!props.isLoading && (<Pagination
                count={pagesTotal}
                defaultPage={1}
                page={props.currentPage}
                onChange={(_, page) =>
                    props.dispatch(setCurrentPage(page))}
                showFirstButton
                showLastButton
                shape={'rounded'}
                color={'primary'}
            />)}
        </div>
        {props.isLoading
            ? <div className={styles.preloader}>
                <Preloader/>
            </div>

            : <ul className={styles.usersList}>
                {userElement}
            </ul>}
    </div>);
};


export default Users;
