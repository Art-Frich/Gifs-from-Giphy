import Api from '../utils/Api';
import Searcher from './main-elements/Searcher';
import GridOfFigureWithPagination from './main-elements/GridOfFigureWithPagination';
import Figure from './main-elements/Figure';

import './Main.css';

import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

const api = new Api('lMKZLF0RM4UWvP0AACmvzURIOnkMxD2y');

export default function Main() {
  const [gifs, setGifs] = useState( [] );
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [ selectedGif, setSelectedGif ] = useState( {} );
  const [ isLoading, setIsLoading ] = useState( false ); //пригодится для loader-а
  const [ isSuccessfulFetch, setIsSuccessfulFetch ] = useState( false ); // отобразить гифки или ошибку, пока только задумка

  useEffect(() => {
    async function getTrendingGifs() {
      try {
        const data = await api.getTrendingGifs();
        setGifs(data.data);
        setTotalPages(Math.ceil(data.pagination.total_count / data.pagination.count));
      } catch (error) {
        console.error(error);
      }
    }
    getTrendingGifs();
  }, []);

  async function handleSearch(query) {
    setSearchQuery(query);
    setCurrentPage(0);
    try {
      const data = await api.searchGifs(query);
      setGifs(data.data);
      setTotalPages(Math.ceil(data.pagination.total_count / data.pagination.count));
    } catch (error) {
      console.error(error);
    }
  }

  async function handlePageChange(newPage) {
    setCurrentPage(newPage);
    try {
      const data = searchQuery
        ? await api.searchGifs(searchQuery, 25, newPage * 25)
        : await api.getTrendingGifs(25, newPage * 25);
      setGifs(data.data);
    } catch (error) {
      console.error(error);
    }
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

  const location = useLocation();

  useEffect( () => {
    if ( location.pathname === '/random-gif' ){
      getRandomGif();
    }
  }, [ location.pathname ]);

  return (
    <main className="main">
      <Routes>
        {/* имхо так лучше: меньше места занимает, быстрее читается */}
        <Route path="/search" element={<>
          <Searcher onSearch={handleSearch} />
          <GridOfFigureWithPagination
            gifs={gifs}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </> } />

        <Route
          path="/trends"
          element={
            <GridOfFigureWithPagination
              gifs={gifs}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          }
        />
        <Route
          path="/random-gif"
          // отдельно вынес пропс url, чтобы мы могли выбирать разрешение гифки в зависимости от чего-либо
          // не знаю, стоит ли ключ давать одному элементу, но закинул - надо погуглить
          // по задумке он выберет или самое большое разрешение (раз одна гифка на весь экран) или оригинальное
          // не уверен, что нужны !isLoading && isSuccessfulFetch &&, но зато пустой элемент рендерить не будет, в это время можно закинуть лоадер под страничкой
          element={ !isLoading && isSuccessfulFetch &&
            <Figure 
              gif={ selectedGif } 
              url={ selectedGif.images.hd?.url ?? selectedGif.images.original.url } 
              key={ selectedGif.id }
            />}
        />
        <Route path="*" element={<Navigate to="/search" />} />
      </Routes>
    </main>
  );
}
