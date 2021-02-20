import React from 'react';
import img from './down-arrow.png';
import style from './Footer.module.css';

export default function Footer() {
    return (
        <a href="#" className={style.footer}><img src={img} alt="down-arrow"/></a>
    );
}