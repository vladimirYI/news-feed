import React, { useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import NewsItem from '../news-item';
import {ItemDetails} from '../item-details'
import {NewsService} from '../../services/news-service';
import {ErrorMessage} from '../error-message';
import {Spinner} from '../spinner';
import {selectTheme} from '../../store';
import {Pagination} from '../pagination';
import {FilterPanel} from '../filter-panel';

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
    const [currentArticle, setCurrentArticle] = useState(undefined);
    const {theme} = useSelector(selectTheme);

    const filteredNews = state.filter((news) => {
        if (news.content === null) {
            return news.content = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
        }
        if (news.author === null) {
            return news.author = 'Unknown';
        }
        if (news.urlToImage === null) {
            return news.urlToImage = 'https://via.placeholder.com/300x200' ;
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
        setState(state => {
            const copyData = [...state];
            let sortData = (directionSort === 'New') 
            ? copyData.sort((a,b) => {return a.publishedAt < b.publishedAt ? 1 : -1})
            : copyData.sort((a,b) => {return a.publishedAt > b.publishedAt ? 1 : -1});
            return sortData;
        });
        event.preventDefault();
    };

    const handleChange = (event) => {
        setDirectionSort(event.target.value);
        event.preventDefault();
    };

    const setNewArticle = (data) => {
        setCurrentArticle(data);
    };

    const goPreviousBack = () => {
        setCurrentArticle(undefined);
    };

    const changeTerm = (event) => {
        setSearchTerm(event.target.value)
    }

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

            {(currentArticle!==undefined) 
                ? null
                : <FilterPanel 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange} 
                    directionSort={directionSort} 
                    changeTerm={changeTerm}/>
            }

            {loading
            ? <Spinner/>
            : hasError 
                ? <ErrorMessage/>
                : (currentArticle) 
                ? <ItemDetails article={currentArticle} goBack={goPreviousBack}/> 
                :currentNews.map((item) => <NewsItem key={item.url} data = {item} setArticle={setNewArticle}/>)
            }
            {(currentArticle!==undefined) 
                ? null
                : <Pagination newsPerPage={newsPerPage} totalNews={state.length} paginate={paginate}/>
            }  
        </div>
    );
}

NewsList.propTypes = {
    category: PropTypes.string
};