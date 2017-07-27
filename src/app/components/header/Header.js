import React from 'react';
import { IndexLink, Link } from 'react-router';

/**
* @desc Header component renders a header with site navigation.
* @example <Header />
* @return {JSX}
*/
const Header = () => (
  <header id="header">
    <nav id="nav">
      <IndexLink to="/">
        Home
      </IndexLink>
    </nav>
  </header>
);

export default Header;
