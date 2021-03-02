import React from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import style from './NewsItem.module.css';
function NewsItem(props)  {
    let {title, urlToImage, content, publishedAt, author} = props.data;
    
    if (urlToImage === null) {
        urlToImage = 'https://via.placeholder.com/300x200' 
    }
    if (author === null) {
        author = 'Unknown' 
    }

    return (
        <div className={style.newsitem}>
            <img className={style.newsitem__img} src={urlToImage} alt=""/>
            <div>
                <div className={style.newsitem__title}><b>{title}</b></div>
                <div className={style.newsitem__descr}>{content}</div>
            </div>
            <div className={style.newsitem__info}>
                <div>{author}</div>
                <div>{publishedAt}</div>
            </div>
            <Button variant="contained" color="primary">
                Read
            </Button>
        </div>
    );
}

NewsItem.propTypes = {
    data: PropTypes.object
};

export {NewsItem};