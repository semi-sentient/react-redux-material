import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Footer from './footer/Footer';
import Header from './header/Header';

import 'normalize.css';
import './layout.scss';

/**
 * Customization for the Material-UI theme. Refer to color variable mapping: http://www.material-ui.com/#/customization/colors
 * 
 * The following colors can be applied to each component, depending on the color theme (note that there a slight variations in weight):
 * 
 *  flatButton:             amber600, blue600, blueGrey600, brown600, deepPurple600, green600, indigo600, pink600, purple600, red600, teal600
 *  floatingActionButton:   amber600, blue500, blueGrey500, brown600, deepPurple500, green600, indigo600, pink600, purple600, red600, teal600
 *  raisedButton:           amber600, blue600, blueGrey600, brown600, deepPurple600, green600, indigo600, pink600, purple600, red600, teal600
 *  datePicker:             amber600, blue600, blueGrey600, brown600, deepPurple600, green600, indigo600, pink600, purple600, red600, teal600
 *  textField:              amber600, blue600, blueGrey600, brown600, deepPurple600, green600, indigo600, pink600, purple600, red600, teal600
 * 
 * For debugging which props can be themed: console.log('muiTheme', muiTheme);
 */
const muiTheme = getMuiTheme({
  // BUTTONS
  flatButton: {
    primaryTextColor: colors.blueGrey600
  },
  floatingActionButton: {
    color: colors.blueGrey500
  },
  raisedButton: {
    primaryColor: colors.blueGrey600
  },
  // INPUT FIELDS
  datePicker: {
    selectColor: colors.blueGrey600
  },
  textField: {
    focusColor: colors.blueGrey600
  }
});

/**
* @desc Layout component wraps the App component with the MuiThemeProvider component to enable usage of Materia-UI site wide.
* @example <Layout />
* @param {Object} children    Child nodes to render in the main content area
* @return {JSX}
*/
class Layout extends Component {
  componentDidUpdate(prevProps) {
    /* istanbul ignore next - can't really test this since it requires an actual route change? */
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id="layout">
          <Header />

          <div id="main">
            {this.props.children}
          </div>

          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export { Layout }; // exposes to test environment
export default withRouter(Layout);
