import { NavLink } from 'react-router-dom';

export const MainPage = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/dishes">Главная страница</NavLink>
      </li>
    </ul>
  </nav>
);