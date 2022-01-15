import React from 'react';
import preloader from '../images/loading.gif'

const imgStyle = {
    width: '350px',
    height: '350px',
    margin: '0',
};

const Preloader = () => {
    return (
        <div>
            <img style={imgStyle} src={preloader} alt={preloader}/>
        </div>
    );
};

export default Preloader;