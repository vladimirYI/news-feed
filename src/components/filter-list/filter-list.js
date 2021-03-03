import React, { useEffect, useState} from 'react';
import NewsItem from '../news-item';
import {NewsService} from '../../services/news-service';
import {ErrorMessage} from '../error-message';
import {Spinner} from '../spinner';
import {useSelector} from 'react-redux';
import {selectTheme} from '../../store';
import {Pagination} from '../pagination';
import PropTypes from 'prop-types';
import {Themes} from '../../store';
import cx from 'classnames';
import style from './FilterList.module.css';

export function FilterList({category}) {
    const [state, setState] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [directionSort, setDirectionSort] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(5);
    const {theme} = useSelector(selectTheme);
    
    const filteredNews = state.filter((news) => {
        if (searchTerm == '') {
            return news;
        } else if (news.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return news;
        }
    });
    
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

    let typeOfSort = (directionSort) ? "New" : "Old";
    const sortByDate = () => {
        const copyData = state.concat();
        let sortData = (directionSort) 
            ? copyData.sort((a,b) => {return a.publishedAt > b.publishedAt ? 1 : -1})
            : copyData.sort((a,b) => {return a.publishedAt < b.publishedAt ? 1 : -1});
        setState(sortData);
        setDirectionSort(!directionSort);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    
    return (
        <div className={cx({
            [style.newslist]: true,
            [style.newslist_dark]: theme === Themes.dark,
            [style.newslist_light]: theme === Themes.light
        })}>
            <input className={style.newslist__input} type="text" onChange={event => {setSearchTerm(event.target.value)}}/>
            <button onClick={sortByDate}>{typeOfSort}</button>

            {loading
            ? <Spinner/>
            : hasError 
                ? <ErrorMessage/>
                : currentNews.map((item) => <NewsItem key={item.url} data = {item}/>)}
            <Pagination newsPerPage={newsPerPage} totalNews={state.length} paginate={paginate}/>
        </div>
    );
}

FilterList.propTypes = {
    category: PropTypes.string
};