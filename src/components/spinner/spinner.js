import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import style from './Spinner.module.css';

function Spinner() {
    return (
        <div className={style.spinner}>
            <ClipLoader color={'#3f51b5'} size={100}/>
        </div>
        
    );
}

export {Spinner};