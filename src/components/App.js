import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Api from '../utils/Api';
import './App.css';

function App() {
  const [gifsState, setGifsState] = useState({
    cntTrendsGifs: 9,
    cntSearchGifs: 9,
    cntsGifsOnPage: 9
  });

  const [ isLoading, setIsLoading ] = useState( false );
  const [ isSuccessfulFetch, setIsSuccessfulFetch ] = useState( false ); 
  const [ isDarkMode, setIsDarkMode ] = useState( window.matchMedia('(prefers-color-scheme: dark)').matches );

  const body = document.querySelector('.body');
  let api = Api(gifsState)

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
      saveData( null );
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
  // eslint-disable-next-line
  }, [ isDarkMode ] )

  useEffect(()=>{
    api = Api(gifsState)
  })

  return <>
    <Header 
      isDarkMode={ isDarkMode } 
      setIsDarkMode={ setIsDarkMode } 
      gifsState={ gifsState }
      setGifsState={ setGifsState }
    />
    <Main 
      getRandomGif={ getRandomGif }
      getTrendingGifs={ getTrendingGifs }
      getSearchGifs={ getSearchGifs }
      isLoading={ isLoading }
      gifsState={ gifsState }
      isSuccessfulFetch={ isSuccessfulFetch }
    />
    <Footer />
  </>;
}

export default App;
