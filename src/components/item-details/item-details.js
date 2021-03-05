import React from 'react';
import PropTypes from 'prop-types';
import {format, parseISO} from 'date-fns';
import style from './ItemDetails.module.css';

export function ItemDetails({article, goBack}) {
    let {title, urlToImage, content, publishedAt, author} = article;
    let parseDate = parseISO(publishedAt);
    let newTime = format(parseDate, 'dd/MMM/y kk:mm');

    return (
        <>
            <button className={style.itemdetails__button} onClick={goBack}>
                    Return
            </button>
            <div className={style.itemdetails}>
                <img className={style.itemdetails__img} src={urlToImage} alt="image"/>
                <div className={style.itemdetails__text}>
                    <div className={style.itemdetails__title}><b>{title}</b></div>
                    <div className={style.itemdetails__descr}>{content}</div>
                </div>
                <div className={style.itemdetails__info}>
                    <div>{author}</div>
                    <div>{newTime}</div>
                </div>
            </div>
        </>
    );
}

ItemDetails.propTypes = {
    article: PropTypes.object,
    goBack: PropTypes.func
};