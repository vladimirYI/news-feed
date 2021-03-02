import React, { useEffect, useState} from 'react';
import {NewsItem} from '../news-item';
import {NewsService} from '../../services/news-service';
import {ErrorMessage} from '../error-message';
import {Spinner} from '../spinner';
import {useSelector} from 'react-redux';
import {selectTheme} from '../../store';
import {Themes} from '../../store';
import cx from 'classnames';
import style from './NewsList.module.css';

function NewsList() {
    const [state, setState] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);
    const {theme} = useSelector(selectTheme);

    useEffect(() => {
        setLoading(true);
        let mounted = true;
        const news = new NewsService();

        news.getAllNews()
            .then(data => { if (mounted) {
                setState(data.articles);
                setLoading(false);
            }})
            .catch(() => {   
                setHasError(true);
                setLoading(false);
            });
    
        return () => mounted = false;
    }, [])

    return (
        <div className={cx({
            [style.newslist]: true,
            [style.newslist_dark]: theme === Themes.dark,
            [style.newslist_light]: theme === Themes.light
        })}>
            {loading
            ? <Spinner/>
            : hasError 
                ? <ErrorMessage/>
                : state.map((item) => <NewsItem key={item.url} data = {item}/>)}
        </div>
    );
}

export {NewsList};




