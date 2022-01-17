import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/LoginPage/LoginPage';
import {useSelector} from 'react-redux';
import ProfileInfoContainer from './components/Profile/ProfileInfo/ProfileInfoContainer';


const App = () => {
  const {isAuth} = useSelector((state) => state.auth);
  console.log(isAuth);

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
  ];

  return (
    <>
      <div className='app_wrapper'>
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
