import React, { Component } from 'react'
/* import NewsItem from '../newsItem'; */
import style from './NewsItems.module.css';

export default class NewsItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles:[],
            hasError: false
        }
    }
    componentDidMount() {
        fetch('http://newsapi.org/v2/everything?q=tesla&from=2021-01-19&sortBy=publishedAt&apiKey=a2d5e3c6a91540969e9b91483b69a0f3')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    articles: data.articles
                });
            })
            .catch(() => {
                this.setState({ hasError: true})
            })
    }
    render() {
        return (
            <div className={style.newsitems}>
                <h2 className={style.newsitems__title}>Блок с новостями</h2>
                {/* <NewsItem category={'category1'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                <NewsItem category={'category2'} text={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'} />
                <NewsItem category={'category3'} text={'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'}/>
                <NewsItem category={'category3'} text={'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'}/> */}

                {this.state.articles.map((item, index) => {
                    return (
                    <div key={index}>
                        <h2 >
                            {item.title}
                        </h2>
                        <img className={style.newsitems__img} src={item.urlToImage} alt=""/>
                        <p>{item.publishedAt}</p>
                    </div>
                    )
                })}
                
            </div>
        );
    } 
}

