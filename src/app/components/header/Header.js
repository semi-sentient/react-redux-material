import React from 'react';
import NavLink from './NavLink';

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
      <NavLink to="/" title="Welcome" />
      <NavLink to="/forms" title="Forms Demo" />
    </nav>
  </header>
);

export default Header;
