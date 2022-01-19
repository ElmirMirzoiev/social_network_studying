import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import Button from '@mui/material/Button';
import styles from './Header.module.scss';

const Header = () => {

    const {login, id, isAuth} = useSelector(state => state.auth)

    return (
        <div className={styles.header}>
      <span>
          Social Network
      </span>
            {
                !isAuth
                    ? <Link to={'/login'}> <Button>Login</Button> </Link>

                    : <Link to={`/profile/${id}`}>{login}_Mirzoiev</Link>
            }
        </div>
    );
};

export default Header;


