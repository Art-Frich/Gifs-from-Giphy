import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Api from '../utils/Api';

function App() {
  return <>
    <Header />
      <Routes>
        {/* <Route /> гифки по запросу*/}
        {/* <Route /> гифки в тренде */}
        {/* <Route /> случайная гифка*/}
      </Routes>
    <Footer />
  </>;
}

export default App;
