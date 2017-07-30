import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

require('normalize.css');
require('./styles/app.scss');

/**
* @desc Layout component wraps the App component with the MuiThemeProvider component to enable usage of Materia-UI site wide.
* @example <Layout />
* @param {Object} children    Child nodes to render in the main content area
* @return {JSX}
*/
const Layout = ({
  children
}) => (
  <MuiThemeProvider>
    <div id="layout">
      <Header />

      <div id="main">
        {children}
      </div>

      <Footer />
    </div>
  </MuiThemeProvider>
);

export default Layout;
