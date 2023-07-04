import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Api from '../utils/Api';
import './App.css';

const cntTrendsGif = 9;
const cntSearchGif = 9;
const api = new Api( cntTrendsGif, cntSearchGif )

function App() {
  const [ isLoading, setIsLoading ] = useState( false );
  const [ isSuccessfulFetch, setIsSuccessfulFetch ] = useState( false ); 
  const [ isDarkMode, setIsDarkMode ] = useState( window.matchMedia('(prefers-color-scheme: dark)').matches );

  const body = document.querySelector('.body');

  async function getSearchGifs( query, saveData ) {
    getDataFromApi( api.getSearchGifs, saveData, query );
  }

  async function getRandomGif( saveData ) {
    getDataFromApi( api.getRandomGif, saveData );
  }

  async function getTrendingGifs( saveData ) {
    getDataFromApi( api.getTrendingGifs, saveData );
  }

  async function getDataFromApi( apiQuery, saveData, query ){
    try {
    // setCurrentPage(0);
      setIsLoading( true );
      setIsSuccessfulFetch( false ); //обнулить предыдущее состояние
      const data = await apiQuery({ query });
      saveData( data.data );
      // setTotalPages(Math.ceil(data.pagination.total_count / data.pagination.count));
      setIsSuccessfulFetch( true )
    } catch ( error ) {
      setIsSuccessfulFetch( false )
      console.error( error );
    } finally {
      setIsLoading( false );
    }
  }

  useEffect(() => {
    isDarkMode
    ? body.classList.add("dark-mode")
    : body.classList.remove("dark-mode")
  }, [ isDarkMode ] )

  return <>
    <Header 
      isDarkMode={ isDarkMode } 
      setIsDarkMode={ setIsDarkMode } />
    <Main 
      getRandomGif={ getRandomGif }
      getTrendingGifs={ getTrendingGifs }
      getSearchGifs={ getSearchGifs }
      isLoading={ isLoading }
    />
    <Footer />
  </>;
}

export default App;
