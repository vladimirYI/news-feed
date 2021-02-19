import React from 'react'
import PropTypes from 'prop-types';
import style from './NewsItem.module.css';
export default function NewsItem(props) {
    return (
        <div className={style.newsitem}>
            <img className={style.newsitem__img} src="http://dummyimage.com/200x150" alt=""/>
            <div className={style.newsitem__descr}>{props.text}</div>
            <div className={style.newsitem__info}>
                <div>{props.category}</div>
                <div>18.02.2021</div>
            </div>
            <button>Читать</button>
        </div>
    );
}

NewsItem.propTypes = {
    category: PropTypes.string,
    text: PropTypes.string
};