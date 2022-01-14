import React from 'react';
import s from './Users.module.css';
import userImg from '../../assets/images/user.png';
import {Button, Pagination} from "@mui/material";
import {follow, setCurrentPage, unfollow} from "../../store/userReducer";
import {NavLink} from "react-router-dom";

function Users(props) {

    const userElement = props.usersPage.users.map(u => <li key={u.id} className={s.userItem}>
        <NavLink to={'/profile/' + u.id}>
            <img alt='UserPhoto' src={u.photos.small !== null ? u.photos.small : userImg} className={s.img}/>
        </NavLink>
        <span>{u.name}</span>
        <span>{'UniqueUrlName'}</span>

        {u.followed

            ?  <Button variant="contained"
                       sx={{width: 80, margin: 1}}
                       size="small"
                        onClick={() => {
                props.dispatch(unfollow(u.id))
            }}>Unfollow</Button>

            : <Button variant="contained"
                      sx={{width: 80, margin: 1}}
                      size="small"
                      onClick={() => {
                          props.dispatch(follow(u.id))
                      }}>Follow</Button>}
    </li>)
    const pagesTotal = Math.ceil(props.usersPage.totalCount / props.usersPage.pageSize)

    return (
        <div className={s.container}>
            <div>
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
            <div className={s.usersBlock}>
                <ul className={s.usersList}>
                    {userElement}
                </ul>
            </div>
        </div>
    )
}


export default Users;








