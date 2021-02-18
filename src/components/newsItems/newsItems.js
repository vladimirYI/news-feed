import React from 'react'
import NewsItem from '../newsItem';
import './newsItems.css';

export default function NewsItems() {
    return (
        <div className="news-items">
            <h2>Блок с новостями</h2>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
        
    );
}