import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

function Navbar() {

    const setActive = navData => navData.isActive ? s.active_link : s.link_item;

    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile/2' className={setActive}> Profile </NavLink>
            </div>
            <div>
                <NavLink to='/messages/' className={setActive}> Messages </NavLink>
            </div>
            <div>
                <NavLink to='/music/' className={setActive}> Music </NavLink>
            </div>
            <div>
                <NavLink to='/settings/' className={setActive}> Settings </NavLink>
            </div>
            <div>
                <NavLink to='/users' className={setActive}> Users </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;