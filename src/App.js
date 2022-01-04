import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Music from "./component/Music/Music";
import Settings from "./component/Settings/Settings";
import {Routes, Route } from "react-router-dom";
import MessagesContainer from "./component/Messages/MessagesContainer";
import UsersContainer from "./component/Users/UsersContainer";

function App(props) {
    return (<div className='container'>
        <Header/>
        <Navbar store={props.store}/>
        <div className='app-content'>
            <Routes>
                <Route path='/profile' element={<Profile store={props.store}/>}/>
                <Route path='/messages' element={<MessagesContainer store={props.store}/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/settings' element={<Settings/>}/>
                <Route path='/users' element={<UsersContainer store={props.store}/>}/>
                {/*<Route path='/friends' element={<Friends/>}/>*/}
            </Routes>
        </div>
    </div>);
}

export default App;
