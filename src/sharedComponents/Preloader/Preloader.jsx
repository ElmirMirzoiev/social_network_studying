import React from 'react';
import preloader from '../../assets/images/loading.gif'
import styles from './Preloader.module.scss'

export const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt={preloader}/>
        </div>
    );
};
