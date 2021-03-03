import React from 'react'
import PropTypes from 'prop-types';
import {format, parseISO} from 'date-fns'
import style from './NewsItem.module.css';
function NewsItem({data})  {
    
    let {title, urlToImage, content, publishedAt, author} = data;
    
    let parseDate = parseISO(publishedAt);
    let newTime = format(parseDate, 'dd/MMM/y kk:mm');
    
    let newTitle = title.slice(0,40)+"...";

    if (urlToImage === null) {
        urlToImage = 'https://via.placeholder.com/300x200' 
    }

    if (author === null) {
        author = 'Unknown' 
    }

    if (content === null) {
        content = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    }
    
    return (
        <div className={style.newsitem}>
            <img className={style.newsitem__img} src={urlToImage} alt=""/>
            <div>
                <div className={style.newsitem__title}><b>{newTitle}</b></div>
                <div className={style.newsitem__descr}>{content}</div>
            </div>
            <div className={style.newsitem__info}>
                <div>{author}</div>
                <div>{newTime}</div>
            </div>
            <button className={style.newsitem__button}>
                Read
            </button>
        </div>
    );
}

NewsItem.propTypes = {
    data: PropTypes.object
};

export default React.memo(NewsItem);