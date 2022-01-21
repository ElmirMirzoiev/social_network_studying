import React from 'react';
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import AuthForm from "./AuthForm/AuthForm";
import styles from './LoginPage.module.scss';

const LoginPage = () => {

    const {isAuth} = useSelector(state => state.auth)

    if (isAuth) return <Navigate to={'/profile/21568'}/>;

    return (
        <div className={styles.authContainer}>
            <h1>Login Page</h1>
            <h4>Please enter your data</h4>
            <div className={styles.authBlock}>
                <AuthForm/>
            </div>
        </div>
    );
};

export default LoginPage;
