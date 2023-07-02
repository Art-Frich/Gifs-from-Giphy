import Api from '../utils/Api';
import Searcher from './main-elements/Searcher';
import GridOfFigureWithPagination from './main-elements/GridOfFigureWithPagination';
import Figure from './main-elements/Figure';

import './Main.css';

import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

const api = new Api();

export default function Main() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [ selectedGif, setSelectedGif ] = useState( {} );
  const [ trendGifs, setTrendGifs ] = useState( [] );
  const [ searchGifs, setSearchGifs ] = useState( [] );

  const [ isLoading, setIsLoading ] = useState( false ); //пригодится для loader-а
  const [ isSuccessfulFetch, setIsSuccessfulFetch ] = useState( false ); // отобразить гифки или ошибку, пока только задумка

  const location = useLocation();

  async function handleSearch(query) {
    setCurrentPage(0);
    try {
      setIsLoading( true );
      setIsSuccessfulFetch( false ); //обнулить предыдущее состояние
      const data = await api.searchGifs(query);
      setSearchGifs(data.data);
      setTotalPages(Math.ceil(data.pagination.total_count / data.pagination.count));
      setIsSuccessfulFetch( true )
    } catch (error) {
      setIsSuccessfulFetch( false )
      console.error(error);
    } finally {
      setIsLoading( false );
    }
  }

  async function handlePageChange(newPage) {
    // setCurrentPage(newPage);
    // try {
    //   const data = searchQuery
    //     ? await api.searchGifs(searchQuery, 25, newPage * 25)
    //     : await api.getTrendingGifs(25, newPage * 25);
    //   setTrendGifs(data.data);
    // } catch (error) {
    //   console.error(error);
    // }
  }

  async function getRandomGif() {
    try {
      setIsLoading( true );
      setIsSuccessfulFetch( false ); //обнулить предыдущее состояние
      const data = await api.getRandomGif();
      setSelectedGif( data.data );
      setIsSuccessfulFetch( true )
    } catch (error) {
      setIsSuccessfulFetch( false )
      console.error(error);
    } finally {
      setIsLoading( false );
    }
  }

  async function getTrendingGifs() {
    try {
      setIsLoading( true );
      setIsSuccessfulFetch( false ); //обнулить предыдущее состояние
      const data = await api.getTrendingGifs();
      setTrendGifs(data.data);
      setTotalPages(Math.ceil(data.pagination.total_count / data.pagination.count));
      setIsSuccessfulFetch( true )
    } catch (error) {
      setIsSuccessfulFetch( false )
      console.error(error);
    } finally {
      setIsLoading( false );
    }
  }

  useEffect( () => {
    if ( location.pathname === '/random-gif' ){ getRandomGif(); };
    if ( location.pathname === '/trends' ){ getTrendingGifs(); };
  }, [ location.pathname ]);

  return (
    <main className="main">
      <Routes>
        {/* имхо так лучше: меньше места занимает, быстрее читается */}
        <Route path="/search" element={<>
          <Searcher onSearch={ handleSearch } />
          <GridOfFigureWithPagination
            gifs={ searchGifs }
            currentPage={ currentPage }
            totalPages={ totalPages }
            onPageChange={ handlePageChange }
          />
        </> } />

        <Route
          path="/trends"
          element={
            <GridOfFigureWithPagination
              gifs={trendGifs}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          }
        />
        <Route
          path="/random-gif"
          // не знаю, стоит ли ключ давать одному элементу, но закинул - надо погуглить
          // по задумке он выберет или самое большое разрешение (раз одна гифка на весь экран) или оригинальное
          element={ selectedGif.images &&
            <Figure 
              title={ selectedGif.title } 
              url={ selectedGif.images.hd?.url ?? selectedGif.images.original.url } 
              key={ selectedGif.id }
            />}
        />
        <Route path="*" element={<Navigate to="/search" />} />
      </Routes>
    </main>
  );
}
