import React, {useEffect} from 'react';
import s from './Users.module.css';
import userImg from '../../assets/images/user.png';
import Preloader from "../Preloader/Preloader";
import {Pagination} from "@mui/material";
import {UsersAPI} from "../../API/usersAPI";

function Users(props) {

    useEffect(() => {
        props.toggleIsLoading(true)
        UsersAPI.getUsersData(props.currentPage, props.pageSize).then( data => {
            props.setUsersData(data.items, data.totalCount)
            props.toggleIsLoading(false)
        })
        console.log('1')
    }, [props.currentPage])

    useEffect(() => {
        return () => {
            props.setCurrentPage(1)
        }
    }, [])

    const userElement = props.users.map(u => <li key={u.id} className={s.userItem}>
        <img alt='UserPhoto' src={u.photos.small !== null ? u.photos.small : userImg} className={s.img}/>
        <span>{u.name}</span>
        <span>{'UniqueUrlName'}</span>
        {u.followed
            ? <button className={s.btn} onClick={() => {
                props.unfollow(u.id)
            }}> Unfollow </button>
            : <button className={s.btn} onClick={() => {
                props.follow(u.id)
            }}> Follow </button>}
    </li>)

    const pagesTotal = Math.ceil(props.totalCount / props.pageSize)

    if (!!props.isLoading) {
        return <Preloader/>
    }
    return (
        <div className={s.container}>
            <div>
                {!!pagesTotal && (
                    <Pagination
                        count={pagesTotal}
                        defaultPage={1}
                        page={props.currentPage}
                        onChange={(_, page) => props.setCurrentPage(page)}
                        showFirstButton
                        showLastButton
                        shape={'rounded'}
                        color={'primary'}
                    />)}
                {/*{props.isLoading && <Preloader/>}*/}
            </div>
            <ul className={s.usersList}>
                {userElement}
            </ul>
        </div>
    )
}

export default Users;








