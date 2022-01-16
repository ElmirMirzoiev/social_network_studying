import React from 'react';
import {NavLink} from "react-router-dom";
import {Button, Pagination} from "@mui/material";
import userImg from '../../assets/images/user.png';
import {follow, setCurrentPage, unfollow} from "../../store/userReducer";
import Preloader from "../../assets/Preloader/Preloader";
import styles from './Users.module.scss';

function Users(props) {

    const userElement = props.usersPage.users.map(users => <li key={users.id} className={styles.userItem}>
        <NavLink to={'/profile/' + users.id}>
            <img alt='UserPhoto' src={users.photos.small !== null ? users.photos.small : userImg}
                 className={styles.img}/>
        </NavLink>
        <span>{users.name}</span>
        <span>{'UniqueUrlName'}</span>

        {users.followed

            ? <Button variant="contained"
                      sx={{width: 80, margin: 1}}
                      size="small"
                      onClick={() => {
                          props.dispatch(unfollow(users.id))
                      }}>Unfollow</Button>

            : <Button variant="contained"
                      sx={{width: 80, margin: 1}}
                      size="small"
                      onClick={() => {
                          props.dispatch(follow(users.id))
                      }}>Follow</Button>}
    </li>)
    const pagesTotal = Math.ceil(props.usersPage.totalCount / props.usersPage.pageSize)

    return (
        <div className={styles.container}>
            <div className={styles.pagination}>
                {!!pagesTotal && (
                    <Pagination
                        count={pagesTotal}
                        defaultPage={1}
                        page={props.usersPage.currentPage}
                        onChange={(_, page) => props.dispatch(setCurrentPage(page))}
                        showFirstButton
                        showLastButton
                        shape={'rounded'}
                        color={'primary'}
                    />)}
            </div>
            {props.usersPage.isLoading
                ? <div className={styles.preloader}>
                    <Preloader/>
                </div>

                : <ul className={styles.usersList}>
                    {userElement}
                </ul>
            }
        </div>
    )
}


export default Users;








