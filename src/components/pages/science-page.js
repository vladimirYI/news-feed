import React, { useEffect, useState, useContext } from 'react';
import {NewsItem} from '../news-item';
import {NewsService} from '../../services/news-service';
import {ThemeContext} from '../theme';
import {ErrorMessage} from '../error-message';
import style from './Pages.module.css';

function SciencePage() {
    const [state, setState] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        setLoading(true);
        let mounted = true;
        const news = new NewsService();

        news.getAllNewsScience()
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
        <div className={style.newsitems} style={theme}>
            {loading ? 
            <div>Loading ...</div>:
            hasError ?
            <ErrorMessage/>:
            state.map((item) => <NewsItem key={item.url} data = {item}/>)}
        </div>
    );
}

export {SciencePage};

