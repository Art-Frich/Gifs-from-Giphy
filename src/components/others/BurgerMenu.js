import React, { useRef, useState, useEffect } from 'react';
import Input from './Input';
import './BurgerMenu.css';

export default function BurgerMenu({gifsState, setGifsState}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  function UlItem({ title, onChange, value}){
    return(
    <li className="burger-menu__item">
      <span className="burger-menu__item-title">{ title }</span>
      <Input
        placeholder={'9?'} 
        onChange={ onChange }
        value={ value }
        type='number'
      />
    </li>)
  }

  return (
    <div className={ `burger-menu ${isOpen ? 'burger-menu_open' : ''}` }>
      <div className="burger-menu__icon" onClick={handleToggle}>
        <div className="burger-menu__line burger-menu__line_type_top" />
        <div className="burger-menu__line burger-menu__line_type_middle" />
        <div className="burger-menu__line burger-menu__line_type_bottom" />
      </div>
      <ul className="burger-menu__dropdown">
        <UlItem title={ "Trend gifs" } element={ 'cntTrendsGifs' } value={ gifsState.cntTrendsGifs } 
        onChange={(e) => setGifsState( prevState => ({ ...prevState, cntTrendsGifs: Number(e.target.value)})) }/>
        <UlItem title={ "Gifs in search" } element={ 'cntSearchGifs' } value={ gifsState.cntSearchGifs } 
        onChange={(e) => setGifsState( prevState => ({ ...prevState, cntSearchGifs: Number(e.target.value)})) }/>
        <UlItem title={ "Gifs on page" } element={ 'cntsGifsOnPage' } value={ gifsState.cntsGifsOnPage } 
        onChange={(e) => setGifsState( prevState => ({ ...prevState, cntsGifsOnPage: Number(e.target.value)})) }/>
      </ul>
    </div>
  );
}