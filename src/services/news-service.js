class NewsService {
    constructor() {
        this._apiBase = 'http://newsapi.org/v2/top-headlines?country=us&';
        this.numberNews = 40;
    }

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}${process.env.REACT_APP_CDA_TOKEN}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }
    
    getAllNews() {
        return this.getResource(`pageSize=${this.numberNews}&apiKey=`)
    }
    getAllNewsScience() {
        return this.getResource(`category=science&pageSize=${this.numberNews}&apiKey=`)
    }
    getAllNewsSports() {
        return this.getResource(`category=sports&pageSize=${this.numberNews}&apiKey=`)
    }
    getAllNewsTechnology() {
        return this.getResource(`category=technology&pageSize=${this.numberNews}&apiKey=`)
    } 
}

export {NewsService};