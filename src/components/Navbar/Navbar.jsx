import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.scss";


function Navbar() {

    const setActive = navData => navData.isActive ? s.active_link : s.link_item;

    const navLinks = [
        {
            path: '/profile/2',
            title: 'Profile'
        },
        {
            path: '/users/',
            title: 'Users'
        },
        {
            path: '/messages/',
            title: 'Messages'
        },
        {
            path: '/settings/',
            title: 'Settings'
        }
    ]

    return (
        <nav className={s.nav}>
            {navLinks.map( nav => <NavLink key={nav.title} to={nav.path} className={setActive}> {nav.title} </NavLink> )}
        </nav>
    );
}

export default Navbar;