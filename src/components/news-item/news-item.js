import React, {useCallback} from 'react'
import PropTypes from 'prop-types';
import {format, parseISO} from 'date-fns';
import style from './NewsItem.module.css';
function NewsItem({data, setArticle})  {
    let {title, urlToImage, content, publishedAt, author} = data;
    let parseDate = parseISO(publishedAt);
    let newTime = format(parseDate, 'dd/MMM/y kk:mm');
    let newTitle = title.slice(0,40)+"...";
    const handleChange = useCallback(() => setArticle(data), []);
  
    return (
        <div className={style.newsitem}>
            <img className={style.newsitem__img} src={urlToImage} alt=""/>
            <div className={style.newsitem__text}>
                <div className={style.newsitem__title}><b>{newTitle}</b></div>
                <div className={style.newsitem__descr}>{content}</div>
            </div>
            <div className={style.newsitem__info}>
                <div>{author}</div>
                <div>{newTime}</div>
            </div>
            <button className={style.newsitem__button} onClick={handleChange}>
                Read
            </button>
        </div>
    );
}

NewsItem.propTypes = {
    data: PropTypes.object,
    setArticle: PropTypes.func
};

export default React.memo(NewsItem);