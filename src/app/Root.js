import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Layout from './components/layout/Layout';

import Welcome from 'pages/welcome/Welcome';
import Forms from 'pages/forms/Forms';
import AccessDenied from 'pages/errors/AccessDenied';
import BrowserUpgrade from 'pages/errors/BrowserUpgrade';
import Oops from 'pages/errors/Oops';

// This is required for touch/tap events to function properly with Material UI
injectTapEventPlugin();

const Root = ({
  store
}) => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/forms" component={Forms} />
          <Route path="/access-denied" component={AccessDenied} />
          <Route path="/browser-upgrade" component={BrowserUpgrade} />
          <Route component={Oops} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
