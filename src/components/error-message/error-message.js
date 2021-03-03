import React from 'react';
import img from './error.jpg'
import style from './ErrorMessage.module.css';

export function ErrorMessage() {
    return (
        <div className={style.error}>
            <img src={img} alt="error"/>
        </div>
    );
}