import React, { Component } from 'react'
import PropTypes from 'prop-types';
/* import NewsService from '../../services/newsService'; */
import style from './NewsItem.module.css';
export default class NewsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            title: null,
            descr: null,
            category: null
        }
        
    }

    /* updateNews() {
        const news = new NewsService();
        news.getAllNewsScience()
            .then((data) => {
                this.setState({
                    articles: data.articles
                });
                
            })
    } */
    render() {
        const {title} = this.state;

        return (
            <div className={style.newsitem}>
                <img className={style.newsitem__img} src="http://dummyimage.com/200x150" alt=""/>
                <div>
                    <div>{title}</div>
                    <div className={style.newsitem__descr}>{this.props.text}</div>
                </div>
                
                <div className={style.newsitem__info}>
                    <div>{this.props.category}</div>
                    <div>18.02.2021</div>
                </div>
                <button>Читать</button>
            </div>
        );
    }
    
}

NewsItem.propTypes = {
    category: PropTypes.string,
    text: PropTypes.string
};