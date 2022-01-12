import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";
import {Routes, Route } from "react-router-dom";
import MessagesContainer from "./component/Messages/MessagesContainer";
import UsersContainer from "./component/Users/UsersContainer";

function App() {
    return (<div className='container'>
        <Header/>
        <Navbar/>
        <div className='app-content'>
            <Routes>
                <Route path='/profile/:id' element={<Profile />}/>
                <Route path='/messages' element={<MessagesContainer />}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/users' element={<UsersContainer />}/>
            </Routes>
        </div>
    </div>);
}

export default App;
