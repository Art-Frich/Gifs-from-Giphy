export default class Api {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = 'https://api.giphy.com/v1/gifs';
    }
  
    async searchGifs(query, limit = 25, offset = 0) {
      const url = `${this.baseUrl}/search?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    }
  
    async getTrendingGifs(limit = 25, offset = 0) {
      const url = `${this.baseUrl}/trending?api_key=${this.apiKey}&limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    }
  
    async getRandomGif() {
      const url = `${this.baseUrl}/random?api_key=${this.apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    }
  }
  