import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setFriendsThunk} from "../../../store/Reducers/friendsReducer";
import Friends from "./Friends/Friends";
import {Navigate} from "react-router-dom";

const FriendsContainer = () => {

    const {isAuth} = useSelector(state => state.auth)
    const {...friendsPage} = useSelector(state => state.friendsPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setFriendsThunk())
    }, [dispatch]);

    if (!isAuth) return <Navigate to={'/login/'}/>;

    return (
        <Friends {...friendsPage}/>
    );
};

export default FriendsContainer;