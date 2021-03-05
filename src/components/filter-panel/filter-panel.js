import React from 'react';
import PropTypes from 'prop-types';
import style from './FilterPanel.module.css';

export function FilterPanel({handleSubmit, handleChange, directionSort, changeTerm}) {
    return (
        <div className={style.filterpanel__filter}>
            <input className={style.filterpanel__search} type="text" placeholder="Search here..." onChange={event => changeTerm(event)}/>
            <form className={style.filterpanel__form} onSubmit={handleSubmit}>
            <label>
                Sort by date:
                <select className={style.filterpanel__select} value={directionSort} onChange={handleChange}>
                    <option value="New">New</option>
                    <option value="Old">Old</option>
                </select>
            </label>
            <input className={style.filterpanel__button} type="submit" value="Submit" />
            </form>
        </div>
    )
}

FilterPanel.propTypes = {
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    directionSort: PropTypes.string,
    changeTerm: PropTypes.func,
};