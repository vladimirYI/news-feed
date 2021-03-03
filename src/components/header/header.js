import React from 'react';
import {Link} from 'react-router-dom';
import {routes} from '../constants';
import cx from 'classnames';
import {Themes} from '../../store';
import {useDispatch, useSelector} from 'react-redux';
import {themeSlice} from '../../store/';
import {selectTheme} from '../../store';
import style from './Header.module.css';

export function Header() {
    const {theme} = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <div className={cx({
            [style.header]: true,
            [style.header_dark]: theme === Themes.dark,
            [style.header_light]: theme === Themes.light
        })}> 
            <ul className={style.header__categories}>
                <Link to={routes.root} className={style.header__items}>Home</Link>
                <Link to={routes.technology} className={style.header__items}>Technologies</Link>
                <Link to={routes.science} className={style.header__items}>Science</Link>
                <Link to={routes.sports} className={style.header__items}>Sport</Link>
                <Link to={routes.filterList} className={style.header__items}>Filter</Link>
            </ul>
            <button
                className={style.header__button}
                onClick={() => dispatch(themeSlice.actions.toggleTheme())}>CHANGE
            </button>

        </div>  
    );
}