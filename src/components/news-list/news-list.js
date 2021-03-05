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
import style from './NewsList.module.css';

export function NewsList({category}) {
    const [state, setState] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(5);
    const [directionSort, setDirectionSort] = useState('New');
    const {theme} = useSelector(selectTheme);

    
    const filteredNews = state.filter((news) => {
        if (news.content === null) {
            return news.content = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
        }
        if (news.author === null) {
            return news.author = 'Unknown';
        }

        if (searchTerm === '') {
            return news;
        } else if (news.title.toLowerCase().includes(searchTerm.toLowerCase())
                || news.content.toLowerCase().includes(searchTerm.toLowerCase())
                || news.author.toLowerCase().includes(searchTerm.toLowerCase())) {
            return news;
        }
    });

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSubmit = (event) => {
        const copyData = state.concat();
        let sortData = (directionSort === 'New') 
        ? copyData.sort((a,b) => {return a.publishedAt < b.publishedAt ? 1 : -1})
        : copyData.sort((a,b) => {return a.publishedAt > b.publishedAt ? 1 : -1});

        setState(sortData);
        event.preventDefault();
    };

    const handleChange = (event) => {
        setDirectionSort(event.target.value);
        event.preventDefault();
    };

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
            <div className={style.newslist__filter}>
                <input className={style.newslist__search} type="text" placeholder="Search here..." onChange={event => {setSearchTerm(event.target.value)}}/>
                <form className={style.newslist__form} onSubmit={handleSubmit}>
                <label>
                    Sort by date:
                    <select className={style.newslist__select} value={directionSort} onChange={handleChange}>]
                        <option value="New">New</option>
                        <option value="Old">Old</option>
                    </select>
                </label>
                <input className={style.newslist__button} type="submit" value="Submit" />
                </form>
            </div>
            

            {loading
            ? <Spinner/>
            : hasError 
                ? <ErrorMessage/>
                : currentNews.map((item) => <NewsItem key={item.url} data = {item}/>)}
            <Pagination newsPerPage={newsPerPage} totalNews={state.length} paginate={paginate}/>
        </div>
    );
}

NewsList.propTypes = {
    category: PropTypes.string
};