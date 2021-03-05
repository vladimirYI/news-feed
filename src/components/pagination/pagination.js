import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useSelector} from 'react-redux';
import {selectTheme} from '../../store';
import {Themes} from '../../store';
import cx from 'classnames';
import style from './Pagination.module.css';

export function Pagination ({newsPerPage, totalNews, paginate}) {
    const {theme} = useSelector(selectTheme);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className={cx({
                    [style.pagination]: true,
                    [style.pagination_dark]: theme === Themes.dark,
                    [style.pagination_light]: theme === Themes.light
                    })}>
                {pageNumbers.map(number => (
                    <li key={number} className={classNames(style.pagination__item)}>
                        <a onClick={() => paginate(number)} href="#" className={style.pagination__link}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    newsPerPage: PropTypes.number,
    totalNews: PropTypes.number,
    paginate: PropTypes.func
};