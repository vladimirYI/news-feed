import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../constants';
import {ThemeContext} from '../theme';
import style from './Header.module.css';

function Header() {
    const theme = useContext(ThemeContext);
    return (
        <div className={style.header} style={theme}>
            <Link to={routes.root} className={style.header__logo} style={theme}>logo</Link>
            <ul className={style.header__categories}>
                <Link to={routes.technology} className={style.header__items} style={theme} >Технологии</Link>
                <Link to={routes.science} className={style.header__items} style={theme}>Наука</Link>
                <Link to={routes.sports} className={style.header__items} style={theme}>Спорт</Link>
            </ul>
        </div>    
    );
}

export {Header};
