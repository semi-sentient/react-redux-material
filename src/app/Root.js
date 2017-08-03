import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Welcome from 'pages/welcome/Welcome';
import Forms from 'pages/forms/Forms';
import AccessDenied from 'pages/errors/AccessDenied';
import BrowserUpgrade from 'pages/errors/BrowserUpgrade';
import Oops from 'pages/errors/Oops';
import Layout from './Layout';

// This is required for touch/tap events to function properly with Material UI
injectTapEventPlugin();

// Sets up page tracking when there is a route change (data sent to Segment)
const configureHistory = (historyObj) => {
  let prevLocation = {};

  historyObj.listen((location) => {
    const pathChanged = prevLocation.pathname !== location.pathname;
    const hashChanged = prevLocation.hash !== location.hash;

    if (pathChanged || hashChanged) {
      window.scrollTo(0, 0);
    }

    // TODO add hook for GA?
    prevLocation = location;
  });

  return historyObj;
};

/**
* Note that browserHistory is being used instead of hashHistory for clean URL's.
* This may not work in production environments without some web server configuration.
* For more on that: https://github.com/reactjs/react-router-tutorial/tree/master/lessons/11-productionish-server
*/

const Root = ({
  history,
  store
}) => (
  <Provider store={store}>
    <Router history={configureHistory(history)}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Welcome} />
        <Route path="/forms" component={Forms} />
        <Route path="/access-denied" component={AccessDenied} />
        <Route path="/browser-upgrade" component={BrowserUpgrade} />
        <Route path="*" component={Oops} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Root;
