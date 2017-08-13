import React from 'react';
import NavLink from '../navLink/NavLink';

import { routes } from 'app/config/routes';
import './header.scss';

/**
* @desc Header component renders a header with site navigation.
* @example <Header />
* @return {JSX}
*/
const Header = () => (
  <header id="header">
    <h2>Site Name</h2>

    <nav id="nav">
      {Object.keys(routes).filter(key => routes[key].isNavItem).map((key, index) => {
        const route = routes[key];

        return <NavLink to={route.path} title={route.title} key={index} />
      })}
    </nav>
  </header>
);

export default Header;
