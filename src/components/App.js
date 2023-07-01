import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Api from '../utils/Api';

import Main from './Main';

function App() {
  return <>
    <Header />
    <Main />
    <Footer />
  </>;
}

export default App;
