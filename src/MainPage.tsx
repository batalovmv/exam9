import { NavLink } from 'react-router-dom';

export const MainPage = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/dishes">Dishes</NavLink>
      </li>
      <li>
        <NavLink to="/orders">Orders</NavLink>
      </li>
    </ul>
  </nav>
);