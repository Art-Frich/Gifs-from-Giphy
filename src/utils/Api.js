const Api = ( gifsState) => {
  const apiKey = 'lMKZLF0RM4UWvP0AACmvzURIOnkMxD2y';
  const baseUrl = 'https://api.giphy.com/v1/gifs';

  const getSearchGifs = async ({ query, limit = gifsState.cntSearchGifs, offset = 0 }) => {
    const url = `${baseUrl}/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=${offset}`;
    return handleFetch(url);
  };

  const getTrendingGifs = async ({ limit = gifsState.cntTrendsGifs, offset = 0 }) => {
    const url = `${baseUrl}/trending?api_key=${apiKey}&limit=${limit}&offset=${offset}`;
    return handleFetch(url);
  };

  const getRandomGif = async () => {
    const url = `${baseUrl}/random?api_key=${apiKey}`;
    return handleFetch(url);
  };

  const handleFetch = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`An error occurred: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  };

  return {
    getSearchGifs,
    getTrendingGifs,
    getRandomGif,
  };
};

export default Api;
