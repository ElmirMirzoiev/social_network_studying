import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';
import styles from './Header.module.scss';
import {setAuthDataThunk} from "../../store/Reducers/authReducer";

const Header = () => {

    const dispatch = useDispatch()
    const {login, id, isAuth} = useSelector(state => state.auth)


    useEffect(() => {
        dispatch(setAuthDataThunk())
    }, [dispatch])


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


