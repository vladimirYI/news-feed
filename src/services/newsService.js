export default class NewsService {
    constructor() {
        this._apiBase = 'http://newsapi.org/v2/top-headlines?country=us&';
    }

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}${process.env.REACT_APP_CDA_TOKEN}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }
     
    getAllNews() {
        return this.getResource('pageSize=5&apiKey=')
    }
    getAllNewsScience() {
        return this.getResource('category=science&pageSize=3&apiKey=')
    }
    getAllNewsSports() {
        return this.getResource('category=sports&pageSize=3&apiKey=')
    }
    getAllNewsTechnology() {
        return this.getResource('category=technology&pageSize=3&apiKey=')
    } 
}