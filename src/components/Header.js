import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import ThemeToggleElement from "./ThemeToggleElement";
import "./Header.css";

export default function Header() {
  const body = document.querySelector('.body');

  const toggleThemeApp = () => {
    body.classList.toggle("dark-mode");
  };

  return (
    <header className="header">
      <div className="header__first-line">
        <img className="header__logo" src={logo} alt="logo" />
        <ThemeToggleElement onClick={ toggleThemeApp } />
      </div>
      <nav className="header__second-line">
        <ul className="header__links">
          <li>
            <NavLink to="/search" className={({ isActive }) =>
              isActive ? "header__link header__link_active" : "header__link"
            }>
              Поиск
            </NavLink>
          </li>
          <li>
            <NavLink to="/trends" className={({ isActive }) =>
              isActive ? "header__link header__link_active" : "header__link"
            }>
              Тренды
            </NavLink>
          </li>
          <li>
            <NavLink to="/random-gif" className={({ isActive }) =>
              isActive ? "header__link header__link_active" : "header__link"
            }>
              Случайный гиф
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
