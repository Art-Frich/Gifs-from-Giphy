export default class Api {
    constructor( cntTrendsGif, cntSearchGif ) {
      this.apiKey = 'lMKZLF0RM4UWvP0AACmvzURIOnkMxD2y';
      this.baseUrl = 'https://api.giphy.com/v1/gifs';
      this.cntSearchGif = cntSearchGif;
      this.cntTrendsGif = cntTrendsGif;
    }
  
    getSearchGifs = async (query, limit = this.cntSearchGif, offset = 0) => {
      const url = `${this.baseUrl}/search?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=${offset}`;
      return this._handleFetch( url );
    }
  
    getTrendingGifs = async (query, limit = this.cntTrendsGif, offset = 0) => {
      const url = `${this.baseUrl}/trending?api_key=${this.apiKey}&limit=${limit}&offset=${offset}`;
      return this._handleFetch( url );
    }
  
    getRandomGif = async ( query ) => {
      const url = `${this.baseUrl}/random?api_key=${this.apiKey}`;
      return this._handleFetch( url );
    }

    async _handleFetch( url ){
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`An error occurred: ${res.statusText}`);
      }
      const data = await res.json();
      return data;
    }
  }
  