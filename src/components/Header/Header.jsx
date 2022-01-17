import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <span>
          Social Network
      </span>
      <Link to={'/login'}>
        <Button>Login</Button>
      </Link>
    </div>
  );
};

export default Header;


