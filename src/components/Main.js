import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searcher from './main-elements/Searcher';
import GridOfFigureWithPagination from './main-elements/GridOfFigureWithPagination';
import Figure from './main-elements/Figure';
import './Main.css';



export default function Main({ getTrendingGifs, getRandomGif, getSearchGifs }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');

  const [ selectedGif, setSelectedGif ] = useState( {} );
  const [ trendGifs, setTrendGifs ] = useState( [] );
  const [ searchGifs, setSearchGifs ] = useState( [] );

  const location = useLocation();


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

  useEffect( () => {
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
          <GridOfFigureWithPagination
            gifs={ searchGifs }
            // currentPage={ currentPage }
            // totalPages={ totalPages }
            // onPageChange={ handlePageChange }
          />
        </> } />

        <Route path="/trends" element={
          <GridOfFigureWithPagination
            gifs={trendGifs}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        } />

        {/* // не знаю, стоит ли ключ давать одному элементу, но закинул - надо погуглить
        // по задумке он выберет или самое большое разрешение (раз одна гифка на весь экран) или оригинальное
        // если гифка пока не скачалась - отрисуй пустой блок => избавит от предупреждений react на счёт пустого роута */}
        <Route path="/random-gif" element={ 
          !selectedGif.images ? <></> :
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
