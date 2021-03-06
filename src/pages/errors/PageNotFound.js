import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { routes } from 'app/config/routes';
import './errors.scss';

const PageNotFound = (props, context) => (
  <div id="errors">
    <main>
      <h1>Oops! Something Happened</h1>

      <h3>Sorry, we couldn’t find the information or page you requested. There may have been a system error.</h3>

      <p>
        <strong>Things to try:</strong>
      </p>

      <ul>
        <li>
          Return to the
          {' '}
          <a
            href="/"
            onClick={
              /* istanbul ignore next */
              (e) => {
                e.preventDefault();
                context.router.history.goBack();
              }
            }
          >
            previous page
          </a>
          {' '}
          and try again.
        </li>

        <li>
          Or if you like... just return to the <Link to={routes.home.path}>home page</Link>.
        </li>
      </ul>
    </main>
  </div>
);

PageNotFound.contextTypes = {
  router: PropTypes.object
};

export default PageNotFound;
