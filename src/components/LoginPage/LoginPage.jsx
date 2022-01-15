import React from 'react';
import styles from './LoginPage.module.scss'
import InputForm from "./InputForm";

function LoginPage() {
    return (
        <section className={styles.authContainer}>
            <h1>Login Page</h1>
            <h4>Please enter your data</h4>
           <div className={styles.block}>
               <InputForm/>
           </div>
        </section>
    );
}

export default LoginPage;