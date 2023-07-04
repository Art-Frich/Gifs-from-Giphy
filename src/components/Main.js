import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searcher from './others/Searcher';
import GridOfFigureWithPagination from './others/GridOfFigureWithPagination';
import Figure from './others/Figure';
import Loader from './others/Loader';
import Error from './Error';
import './Main.css';

export default function Main({ 
  getTrendingGifs, getRandomGif, getSearchGifs, isLoading, gifsState, isSuccessfulFetch
}) {
  // const [currentPage, setCurrentPage] = useState(0);
  // const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');

  const [ selectedGif, setSelectedGif ] = useState( null );
  const [ trendGifs, setTrendGifs ] = useState( [] );
  const [ searchGifs, setSearchGifs ] = useState( [] );

  const location = useLocation();

  useEffect( () => {
    if ( location.pathname === '/random-gif' ){ getRandomGif( setSelectedGif ); };
    if ( location.pathname === '/trends' ){ getTrendingGifs( setTrendGifs ); };
  // eslint-disable-next-line
  }, [ location.pathname, gifsState ]);

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
          { isLoading 
          ? <Loader /> 
          : !isSuccessfulFetch && !searchGifs ? <Error /> 
          : <GridOfFigureWithPagination
            gifs={ searchGifs }
          />}
        </> } />

        <Route path="/trends" element={
          isLoading 
          ? <Loader /> 
          : !isSuccessfulFetch ? <Error /> 
          : <GridOfFigureWithPagination
            gifs={ trendGifs }
          />
        } />

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
