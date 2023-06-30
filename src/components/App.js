import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Api from '../utils/Api';
import MainRandomGif from './MainRandomGif';
import MainTrends from './MainTrends';
import MainSearch from './MainSearch';

function App() {
  return <>
    <Header />
    <Routes>
      <Route path='/search' element={ MainSearch } />
      <Route path='/trends' element={ MainTrends } />
      <Route path='/random-gif' element={ MainRandomGif } />
      <Route path='*' element={ <Navigate to='/search' />} />
    </Routes>
    <Footer />
  </>;
}

export default App;
