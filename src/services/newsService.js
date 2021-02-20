export default class NewsService {
    constructor() {
        this._apiBase = 'http://newsapi.org/v2/top-headlines?country=us&category=';
        this._apiKey = 'a2d5e3c6a91540969e9b91483b69a0f3'
    }

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}${this._apiKey}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }
    getAllNewsScience() {
        return this.getResource('science&pageSize=3&apiKey=')
    }
    getAllNewsSports() {
        return this.getResource('sports&pageSize=3&apiKey=')
    }
    getAllNewsTechnology() {
        return this.getResource('technology&pageSize=3&apiKey=')
    }
}