import './Header.css';
import logo from '../images/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header(){
  return(
    <header className="header">
      <img className="header__logo" src={ logo } alt='logo' />
      <nav>
        <ul className="header__links">
        <li>
            <NavLink
              to="/search"
              className="header__link"
              activeClassName="header__link_active"
              // onClick={() => handleLinkClick('Поиск')}
            >
              Поиск
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trends"
              className="header__link"
              activeClassName="header__link_active"
              // onClick={() => handleLinkClick('Тренды')}
            >
              Тренды
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/random"
              className="header__link"
              activeClassName="header__link_active"
              // onClick={() => handleLinkClick('Случайный гиф')}
            >
              Случайный гиф
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}