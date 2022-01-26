import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {setUsersThunk} from "../../../store/Reducers/userReducer"
import {Preloader} from "../../../sharedComponents/Preloader/Preloader"
import {UserItem} from "./UserItem/UserItem"
import {Pagination} from "../../../sharedComponents/Pagination/Pagination";
import styles from "./UsersPage.module.scss"

export const UsersPage = () => {

    const dispatch = useDispatch();
    const {totalCount, pageSize, currentPage, isLoading, users, followInProgress} = useSelector(state => state.usersPage);

    useEffect(() => {
        dispatch(setUsersThunk(currentPage))
    }, [dispatch, currentPage, users.followed])


    return (
        <div className={styles.container}>
            <Pagination totalCount={totalCount}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        dispatch={dispatch}/>
            {isLoading

                ? <Preloader/>

                : <UserItem users={users}
                            followInProgress={followInProgress}
                            dispatch={dispatch}/>}

        </div>
    )
}
