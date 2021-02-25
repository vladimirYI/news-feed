import React from 'react';
import {Link} from 'react-router-dom';
import style from './Header.module.css';
export default function Header() {
    
    return (
        <div className={style.header}>
            <Link className={style.header__logo} to='/#'>logo</Link>
            <ul className={style.header__categories}>
                <Link to='/technology' className={style.header__items} >Технологии</Link>
                <Link to='/science' className={style.header__items}>Наука</Link>
                <Link to='/sports' className={style.header__items}>Спорт</Link>
            </ul>
        </div>
        
    );
}
