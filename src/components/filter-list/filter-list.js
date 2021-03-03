import React, { useEffect, useState} from 'react';
import {NewsItem} from '../news-item';
import {NewsService} from '../../services/news-service';
import {ErrorMessage} from '../error-message';
import {Spinner} from '../spinner';
import {useSelector} from 'react-redux';
import {selectTheme} from '../../store';
import PropTypes from 'prop-types';
import {Themes} from '../../store';
import cx from 'classnames';
import style from './FilterList.module.css';

export function FilterList({category}) {
    const [state, setState] = useState([]);
/*     const [filteredState, setFilteredState] = useState([]); */
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const {theme} = useSelector(selectTheme);

    const filteredNews = state.filter((news) => {
        if (searchTerm == '') {
            return news;
        } else if (news.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return news;
        }
    });

    useEffect(() => {
        setLoading(true);
        let mounted = true;
        const news = new NewsService();

        news.getNews(category)
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
    
    const sortByOld = () => {
        let newSort = state.sort((a,b) => a.publishedAt > b.publishedAt ? 1 : -1);
        console.log(newSort);
    }
    
    return (
        <div className={cx({
            [style.newslist]: true,
            [style.newslist_dark]: theme === Themes.dark,
            [style.newslist_light]: theme === Themes.light
        })}>

            <input className={style.newslist__input} type="text" onChange={event => {setSearchTerm(event.target.value)}}/>
            <button onClick={sortByOld}>Old</button>

            {loading
            ? <Spinner/>
            : hasError 
                ? <ErrorMessage/>
                : filteredNews.map((item) => <NewsItem key={item.url} data = {item}/>)}
        </div>
    );
    
}

FilterList.propTypes = {
    category: PropTypes.string
};