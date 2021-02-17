import NewsItem from '../newsItem';
import './newsItems.css';

export default function NewsItems(props) {
    return (
        <div className="newsItems">
            <h2>Блок с новостями</h2>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
        
    );
}