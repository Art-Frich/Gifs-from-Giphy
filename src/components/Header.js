import { NavLink } from 'react-router-dom';
import ThemeToggleElement from './others/ThemeToggleElement';
import BurgerMenu from './others/BurgerMenu';
import './Header.css';

export default function Header({ isDarkMode, setIsDarkMode, gifsState, setGifsState }) {
  function UlElement({ text, link }) {
    return (
      <li>
        <NavLink
          to={link}
          className={({ isActive }) => (isActive ? 'header__link header__link_active' : 'header__link')}>
          {text}
        </NavLink>
      </li>
    );
  }

  return (
    <header className="header">
      <div className="header__first-line">
        <span className="header__logo">LOGO</span>
        <ThemeToggleElement state={isDarkMode} setState={setIsDarkMode} />
        <div className="header__burger-container">
          <h3 className="header__text">Настройки</h3>
          <BurgerMenu gifsState={gifsState} setGifsState={setGifsState} />
        </div>
      </div>
      <nav className="header__second-line">
        <ul className="header__links">
          <UlElement text={'Поиск'} link={'/search'} />
          <UlElement text={'Тренды'} link={'/trends'} />
          <UlElement text={'Случайный гиф'} link={'/random-gif'} />
        </ul>
      </nav>
    </header>
  );
}
