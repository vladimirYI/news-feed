import React from 'react';
import style from './Footer.module.css';
import img from './down-arrow.png';

export default function Footer() {
    return (
        <a href="#" className={style.footer}><img src={img} alt="down-arrow"/></a>
    );
}