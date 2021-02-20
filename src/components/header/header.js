import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import style from './Header.module.css';
export default function Header(props) {
    let listCategory = props.categories.map((category, index) => 
        <li className={style.header__items} key={index}><Link to='/news'> {category} </Link></li>
    );
    return (
        <div className={style.header}>
            <Link className={style.header__logo} to='/#'>logo</Link>
            <ul className={style.header__categories}>{listCategory}</ul>
        </div>
        
    );
}

Header.propTypes = {
    categories: PropTypes.array
};