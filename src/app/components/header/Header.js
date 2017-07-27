import React from 'react';
import NavLink from './NavLink';

/**
* @desc Header component renders a header with site navigation.
* @example <Header />
* @return {JSX}
*/
const Header = () => (
  <header id="header">
    <nav id="nav">
      <NavLink to="/home" title="Home" />
    </nav>
  </header>
);

export default Header;
