import React from 'react'
import './header.css';
import PropTypes from 'prop-types';

export default function Header(props) {
    let listCategory = props.categories.map((category, index) => 
        <li className="header__items" key={index}><a href="#"> {category} </a></li>
    );
    return (
        <ul className='header'>{listCategory}</ul>
    );
}

Header.propTypes = {
    categories: PropTypes.array
  };