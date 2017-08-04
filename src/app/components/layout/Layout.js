import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Footer from './footer/Footer';
import Header from './header/Header';

import 'normalize.css';
import './layout.scss';

/**
* @desc Layout component wraps the App component with the MuiThemeProvider component to enable usage of Materia-UI site wide.
* @example <Layout />
* @param {Object} children    Child nodes to render in the main content area
* @return {JSX}
*/
class Layout extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div id="layout">
          <Header />

          <div id="main">
            {this.props.children}
          </div>

          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withRouter(Layout);
