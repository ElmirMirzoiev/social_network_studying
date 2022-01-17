import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/LoginPage/LoginPage";
import {useSelector} from "react-redux";
import ProfileInfoContainer from "./components/Profile/ProfileInfo/ProfileInfoContainer";



const App = () => {

    const {isAuth} = useSelector(state => state.auth)
    console.log(isAuth)

    return (
        <>
            {isAuth
                ? <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-content'>
                        <Routes>
                            <Route path='/profile/:id' element={<ProfileInfoContainer/>}/>
                            <Route path='/messages' element={<MessagesContainer/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                        </Routes>
                    </div>
                </div>

                : <div className='auth_container' >
                    <LoginPage/>
                    {/*<Routes>*/}
                    {/*    <Route index path='/login' element={}/>*/}
                    {/*</Routes>*/}
                </div>
            }
        </>
    );
}

export default App;
