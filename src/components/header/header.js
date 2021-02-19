import React from 'react'
import style from './Header.module.css';
import PropTypes from 'prop-types';
export default function Header(props) {
    let listCategory = props.categories.map((category, index) => 
        <li className={style.header__items} key={index}><a href="#"> {category} </a></li>
    );
    return (
        <div className={style.header}>
            <a className={style.header__logo} href="#">logo</a>
            <ul className={style.header__categories}>{listCategory}</ul>
        </div>
        
    );
}

Header.propTypes = {
    categories: PropTypes.array
};