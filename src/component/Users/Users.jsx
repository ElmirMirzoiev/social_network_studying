import React from 'react';
import s from './Users.module.css';
import userImg from '../../assets/images/user.png';
import {Pagination} from "@mui/material";
import {follow, setCurrentPage, unfollow} from "../../store/userReducer";

function Users(props) {

const userElement = props.usersPage.users.map(u => <li key={u.id} className={s.userItem}>
    <img alt='UserPhoto' src={u.photos.small !== null ? u.photos.small : userImg} className={s.img}/>
    <span>{u.name}</span>
    <span>{'UniqueUrlName'}</span>
    {u.followed
        ? <button className={s.btn} onClick={() => {
            props.dispatch(unfollow(u.id))
        }}> Unfollow </button>
        : <button className={s.btn} onClick={() => {
            props.dispatch(follow(u.id))
        }}> Follow </button>}
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
        <ul className={s.usersList}>
            {userElement}
        </ul>
    </div>
)
}


export default Users;








