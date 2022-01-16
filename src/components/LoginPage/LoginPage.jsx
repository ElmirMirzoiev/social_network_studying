import React from 'react';
import styles from './LoginPage.module.scss'
import AuthForm from "./authForm";

function LoginPage() {
    return (
        <section className={styles.authContainer}>
            <h1>Login Page</h1>
            <h4>Please enter your data</h4>
           <div className={styles.block}>
               <AuthForm/>
           </div>
        </section>
    );
}

export default LoginPage;