import {useDispatch, useSelector} from "react-redux";
import {setUsersData, toggleIsLoading,} from "../../store/userReducer";
import Users from "./Users";
import React, {useEffect} from "react";
import {UsersAPI} from "../../API/usersAPI";
import Preloader from "../Preloader/Preloader";

const UsersContainer = () => {

    const dispatch = useDispatch();
    const usersPage = useSelector(state => state.usersPage);

    useEffect(() => {
        dispatch(toggleIsLoading(true))
        UsersAPI.getUsersData(usersPage.currentPage).then(data => {
            dispatch(setUsersData(data.items, data.totalCount))
            dispatch(toggleIsLoading(false))
        })
        console.log('1')
    }, [dispatch, usersPage.currentPage])

    // useEffect(() => {
    //     return () => {
    //         props.setCurrentPage(1)
    //     }
    // }, [])

    if (!!usersPage.isLoading) {
        return <Preloader/>
    }
    return (
        <>
            <Users usersPage={{...usersPage}}
            dispatch={dispatch}/>
        </>
    )

}

export default UsersContainer;

