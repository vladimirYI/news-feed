import React from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import style from './NewsItem.module.css';
function NewsItem(props)  {
    let {title, urlToImage, content, publishedAt, author} = props.data;
    
    let newTime = publishedAt.slice(0,10);
    let newTitle = title.slice(0,30)+"...";

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