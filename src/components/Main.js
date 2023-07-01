import { useState, useEffect } from 'react';
import Api from '../utils/Api';
import Searcher from './main-elements/Searcher';
import GridOfFigureWithPagination from './main-elements/GridOfFigureWithPagination';
import Figure from './main-elements/Figure';

import './Main.css';

import { Navigate, Route, Routes } from 'react-router-dom';

const api = new Api('lMKZLF0RM4UWvP0AACmvzURIOnkMxD2y');

export default function Main() {
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

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

  async function handleRandomGif() {
    try {
      const data = await api.getRandomGif();
      setGifs([data.data]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="main">
      <Routes>
        <Route
          path="/search"
          element={
            <>
              <Searcher onSearch={handleSearch} />
              <GridOfFigureWithPagination
                gifs={gifs}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          }
        />
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
          element={<Figure onRandomGif={handleRandomGif} gifs={gifs} />}
        />
        <Route path="*" element={<Navigate to="/search" />} />
      </Routes>
    </main>
  );
}
