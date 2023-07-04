import React, { useRef, useState, useEffect } from 'react';
import Input from './Input';
import './BurgerMenu.css';

export default function BurgerMenu({gifsState, setGifsState}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={ `burger-menu ${isOpen ? 'burger-menu_open' : ''}` }>
      <div className="burger-menu__icon" onClick={handleToggle}>
        <div className="burger-menu__line burger-menu__line_type_top" />
        <div className="burger-menu__line burger-menu__line_type_middle" />
        <div className="burger-menu__line burger-menu__line_type_bottom" />
      </div>
      <ul className="burger-menu__dropdown">
        <li className="burger-menu__item">
          <span className="burger-menu__item-title">{ "Количество трендовых гивок"  }</span>
          <Input
            placeholder={'9?'} 
            onChange={ (e) => setGifsState( prevState => ({ ...prevState, cntTrendsGifs: e.target.value})) }
            value={ gifsState.cntTrendsGifs }
          />
        </li>

        <li className="burger-menu__item">
          <span className="burger-menu__item-title">{ "Количество гивок по запросу" }</span>
          <Input
            placeholder={'9?'} 
            onChange={ (e) => setGifsState( prevState => ({ ...prevState, cntSearchGifs: e.target.value})) }
            value={ gifsState.cntSearchGifs }
          />
        </li>

        <li className="burger-menu__item">
          <span className="burger-menu__item-title">{ "Количество гивок на странице" }</span>
          <Input
            placeholder={'9?'} 
            onChange={ (e) => setGifsState( prevState => ({ ...prevState, cntsGifsOnPage: e.target.value})) }
            value={ gifsState.cntsGifsOnPage } 
          />
        </li>
      </ul>
    </div>
  );
}