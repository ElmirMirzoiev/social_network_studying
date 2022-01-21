import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Pages/SettingsPage/Settings';
import MessagesContainer from './components/Pages/MessagesPage/MessagesContainer';
import UsersContainer from './components/Pages/UsersPage/UsersContainer';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import ProfileInfoContainer from './components/ProfilePage/ProfileInfo/ProfileInfoContainer';
import FriendsContainer from "./components/Pages/FriendsPage/FriendsContainer";
import {setAuthDataThunk} from "./store/Reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import './App.scss';
// import Preloader from "./sharedComponents/Preloader/Preloader";
// import {isAuth} from "./store/Selectors/authSelector";


const App = () => {

    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.auth);
    console.log(isAuth);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setAuthDataThunk())
        }, 500)
    }, [dispatch, isAuth])

    const routes = [
        {
            path: '/profile/:id',
            element: <ProfileInfoContainer/>,
        },
        {
            path: '/users',
            element: <UsersContainer/>,
        },
        {
            path: '/messages',
            element: <MessagesContainer/>,
        },
        {
            path: '/settings',
            element: <Settings/>,
        },
        {
            path: '/login',
            element: <LoginPage/>,
        },
        {
            path: '/friends',
            element: <FriendsContainer/>,
        }
    ];

    // if (!isAuth) {
    //     return <Preloader/>
    // }

    return (
        <>

            <div className='app_wrapper'>
                {/*{!isAuth ? <Navigate to='/login'/> : <Navigate to='/friends'/>}*/}
                <Header/>
                <Navbar/>
                <div className='app_content'>
                    <Routes>
                        {routes.map((route) =>
                            <Route key={route.path}
                                   path={route.path}
                                   element={route.element}/>)}
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default App;
