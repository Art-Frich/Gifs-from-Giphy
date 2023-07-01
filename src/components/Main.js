import Searcher from './Searcher';
import GridOfFigureWithPagination from './GridOfFigureWithPagination';
import Figure from './Figure';

import './Main.css';

import { Navigate, Route, Routes } from 'react-router-dom';

export default function Main(){

  return(
  <main className="main">
    <Routes>
      <Route path='/search' element={<>
        <Searcher />
        <GridOfFigureWithPagination  />
      </>} />
      <Route path='/trends' element={
        <GridOfFigureWithPagination  />
      } />
      <Route path='/random-gif' element={
        < Figure />
      } />
      <Route path='*' element={ <Navigate to='/search' />} />
    </Routes>
  </main>) 
}