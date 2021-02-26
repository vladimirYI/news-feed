import React from 'react'
import PropTypes from 'prop-types';
import style from './NewsItem.module.css';
function NewsItem(props)  {
    const {title, urlToImage, content, publishedAt, author} = props.data;
    return (
        <div className={style.newsitem}>
            <img className={style.newsitem__img} src={urlToImage} alt=""/>
            <div>
                <div className={style.newsitem__title}>{title}</div>
                <div className={style.newsitem__descr}>{content}</div>
            </div>
            <div className={style.newsitem__info}>
                <div>{author}</div>
                <div>{publishedAt}</div>
            </div>
            <button>Читать</button>
        </div>
    );
}

NewsItem.propTypes = {
    data: PropTypes.object
};

export {NewsItem};