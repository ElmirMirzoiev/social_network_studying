import {useDispatch, useSelector} from "react-redux";
import {setUsersThunk} from "../../store/userReducer";
import Users from "./Users";
import React, {useEffect} from "react";

const UsersContainer = () => {

    const dispatch = useDispatch();
    const {...usersPage} = useSelector(state => state.usersPage);

    useEffect(() => {
        dispatch(setUsersThunk(usersPage.currentPage))
    }, [dispatch, usersPage.currentPage])

    return (
        <>
            <Users usersPage={usersPage}
                   dispatch={dispatch}/>
        </>
    )

}

export default UsersContainer;

