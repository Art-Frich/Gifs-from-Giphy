import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searcher from './others/Searcher';
import GridOfFigureWithPagination from './others/GridOfFigureWithPagination';
import Figure from './others/Figure';
import Loader from './others/Loader';
import Error from './others/Error';
import queryString from 'query-string'; // библиотека для работы с параметрами URL
import './Main.css';

export default function Main({ getTrendingGifs, getRandomGif, getSearchGifs, isLoading, isError, cntCardsOnPage }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');

  const [ selectedGif, setSelectedGif ] = useState( null );
  const [ trendGifs, setTrendGifs ] = useState( [] );
  const [ searchGifs, setSearchGifs ] = useState( [] );

  const location = useLocation();

  // получение параметров URL
  const queryParams = queryString.parse(location.search);
  const searchQuery = queryParams.q;
  const page = parseInt(queryParams.page) || 0;

  async function handlePageChange( newPage ) {
    // обновление URL с новыми параметрами
    const newQueryParams = { ...queryParams, page: newPage };
    const newSearch = queryString.stringify(newQueryParams);
    window.history.pushState(null, '', `${location.pathname}?${newSearch}`);
  }

  useEffect(() => {
    // установка состояния из параметров URL
    if (searchQuery) {
      setQuery(searchQuery);
      getSearchGifs(searchQuery, setSearchGifs);
    }
    setCurrentPage(page);

    if ( location.pathname === '/random-gif' ){ getRandomGif( setSelectedGif ); };
    if ( location.pathname === '/trends' ){ getTrendingGifs( setTrendGifs ); };
  // eslint-disable-next-line
  }, [ location.pathname ]);

  return (
    <main className="main">
      <Routes>
        <Route path="/search" element={<>
          <Searcher 
            onSearch={ getSearchGifs } 
            setQuery={ setQuery } 
            query={ query }
            setGifs={ setSearchGifs }
          />
          { isError ? <Error /> : isLoading 
          ? <Loader /> 
          : <GridOfFigureWithPagination
            gifs={ searchGifs.slice(currentPage * cntCardsOnPage, (currentPage + 1) * cntCardsOnPage) }
            currentPage={currentPage}
            totalPages={Math.ceil(searchGifs.length / cntCardsOnPage)}
            onPageChange={handlePageChange}
          />}
        </> } />

        <Route path="/trends" element={
          isError ? <Error /> : isLoading 
          ? <Loader /> 
          : <GridOfFigureWithPagination
            gifs={ trendGifs.slice(currentPage * cntCardsOnPage, (currentPage + 1) * cntCardsOnPage) }
            currentPage={currentPage}
            totalPages={Math.ceil(trendGifs.length / cntCardsOnPage)}
            onPageChange={handlePageChange}
          />
        } />

        {/* {/* // не знаю, стоит ли ключ давать одному элементу, но закинул - надо погуглить
        // по задумке он выберет или самое большое разрешение (раз одна гифка на весь экран) или оригинальное */}
        <Route path="/random-gif" element={ 
          isLoading ? <Loader /> : !selectedGif ? <Error /> :
          <Figure 
            title={ selectedGif.title } 
            url={ selectedGif.images.hd?.url ?? selectedGif.images.original.url } 
            key={ selectedGif.id }
          />
        } />
        <Route path="*" element={ <Navigate to="/search" /> } />
      </Routes>
    </main>
  );
}
