import { useState } from 'react';
import './Header.css';
import logo from '../images/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [isDark, setIsDark] = useState(false);

    const handleButtonClick = () => {
        if (isDark) {
            document.body.classList.remove('dark-mode');
            setIsDark(false);
        } else {
            document.body.classList.add('dark-mode');
            setIsDark(true);
        }
    };

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="logo" />
            <nav>
                <ul className="header__links">
                    <li>
                        <NavLink
                            to="/search"
                            className={({ isActive }) =>
                                isActive ? "header__link header__link_active" : "header__link"
                            }
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
                        >
                            Случайный гиф
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button onClick={handleButtonClick}>Сменить фон</button>
        </header>
    );
}