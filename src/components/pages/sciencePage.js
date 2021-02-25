import React, { Component } from 'react'
import NewsItem from '../newsItem';
import NewsService from '../../services/newsService';
import style from './Pages.module.css';


export class SciencePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles:[]
        }
    }
    componentDidMount() {
        const news = new NewsService();

        news.getAllNewsScience()
            .then((data) => {
                this.setState({
                    articles: data.articles
                });
            })
    }
    render() {
        return (
            <div className={style.newsitems}>
                <h2 className={style.newsitems__title}>Наука</h2>
                {this.state.articles.map((item, index) => <NewsItem key = {index} data = {item}/>)}
            </div>
        );
    } 
}

