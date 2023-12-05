import { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Api from '../utils/Api';
import './App.css';

function App() {
  const [gifsState, setGifsState] = useState({
    cntTrendsGifs: 20,
    cntSearchGifs: 20,
    cntGifsOnPage: 6,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessfulFetch, setIsSuccessfulFetch] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  const body = document.querySelector('.body');
  const api = useRef(Api(gifsState));

  async function getSearchGifs(query, saveData) {
    getDataFromApi(api.current.getSearchGifs, saveData, query);
  }

  async function getRandomGif(saveData) {
    getDataFromApi(api.current.getRandomGif, saveData);
  }

  async function getTrendingGifs(saveData) {
    getDataFromApi(api.current.getTrendingGifs, saveData);
    console.log('i work');
  }

  async function getDataFromApi(apiQuery, saveData, query) {
    try {
      setIsLoading(true);
      setIsSuccessfulFetch(false); //обнулить предыдущее состояние
      saveData(null);
      const data = await apiQuery({ query });
      saveData(data.data);
      setIsSuccessfulFetch(true);
    } catch (error) {
      setIsSuccessfulFetch(false);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    isDarkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
    // eslint-disable-next-line
  }, [isDarkMode]);

  useEffect(() => {
    api.current = Api(gifsState);
  }, [gifsState]);

  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} gifsState={gifsState} setGifsState={setGifsState} />
      <Main
        getRandomGif={getRandomGif}
        getTrendingGifs={getTrendingGifs}
        getSearchGifs={getSearchGifs}
        isLoading={isLoading}
        gifsState={gifsState}
        isSuccessfulFetch={isSuccessfulFetch}
        api={api}
      />
      <Footer />
    </>
  );
}

export default App;
