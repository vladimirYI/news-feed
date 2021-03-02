import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Pagination.module.css';

function Pagination ({newsPerPage, totalNews, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className={style.pagination}>
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

export {Pagination};