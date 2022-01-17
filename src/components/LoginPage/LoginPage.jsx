import React from 'react';
import AuthForm from './authForm';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <section className={styles.authContainer}>
      <h1>Login Page</h1>
      <h4>Please enter your data</h4>
      <div className={styles.block}>
        <AuthForm/>
      </div>
    </section>
  );
};

export default LoginPage;
