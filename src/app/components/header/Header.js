import React from 'react';
import NavLink from './NavLink';

/**
* @desc Header component renders a header with site navigation.
* @example <Header />
* @return {JSX}
*/
const Header = () => (
  <header id="header">
    <h2>Site Name</h2>
    
    <nav id="nav">
      <NavLink to="/home" title="Home" />
    </nav>
  </header>
);

export default Header;
