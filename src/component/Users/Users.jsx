import React, {useEffect} from 'react';
import s from './Users.module.css';
import userImg from '../../assets/images/user.png';
import axios from "axios";

function Users(props) {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
            .then(response => {props.setUsersData(response.data.items, response.data.totalCount)
            })
        console.log('1')
    }, [props.currentPage])
    useEffect(() => {
        props.setUsersData(props.users, props.totalCount)
        console.log('2')
        return () => {
            props.setCurrentPage(1)
        }
    },[])

    const userElement = props.users.map(u => <div key={u.id}>
        <span>
              <img alt='UserPhoto' src={u.photos.small !== null ? u.photos.small : userImg} className={s.img}/>
            <div className={s.item}>{u.name}</div>
        </span>
        <span>
            <div>{'UniqueUrlName'}</div>
            <div>
                {u.followed
                    ? <button className={s.btn} onClick={() => {
                        props.unfollowUser(u.id)
                    }}> Unfollow </button>
                    : <button className={s.btn} onClick={() => {
                        props.followUser(u.id)
                    }}> Follow </button>}
            </div>
        </span>
    </div>)
    const pagination = () => {
        const pagesCount = Math.ceil(props.totalCount / props.pageSize)
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return pages.map(p => <span
            onClick={() => (props.setCurrentPage(p))}
            key={p.id}
            className={props.currentPage === p ? s.selected_Page : s.pagesList}>
                {p}
            </span>)
    }

    return (
        <div className={s.container}>
            <div>
                {pagination()}
            </div>
            <div className={s.usersList}>
                {userElement}
            </div>
        </div>
    )
}

export default Users;








