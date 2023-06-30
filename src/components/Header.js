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
              className={({ isActive }) =>
                isActive ? "header__link header__link_active" : "header__link"
              }
              // onClick={() => handleLinkClick('Поиск')}
            >
              Поиск
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trends"
              className={({ isActive }) =>
                isActive ? "header__link header__link_active" : "header__link"
              }
              // onClick={() => handleLinkClick('Тренды')}
            >
              Тренды
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/random-gif"
              className={({ isActive }) =>
                isActive ? "header__link header__link_active" : "header__link"
              }
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