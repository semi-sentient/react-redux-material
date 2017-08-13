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
import { routes } from './config/routes';

// This is required for touch/tap events to function properly with Material UI
injectTapEventPlugin();

const Root = ({
  store
}) => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          {Object.keys(routes).map((key, index) => (
            <Route {...routes[key]} key={index} />
          ))}
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
