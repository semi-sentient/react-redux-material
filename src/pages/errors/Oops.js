import React from 'react';
import { browserHistory, Link } from 'react-router';

import Banner from 'app/components/banner/Banner';

require('./errors.scss');

const Oops = () => (
  <div id="errors">
    <Banner title="Oops! Something Happened" />

    <div className="container">
      <h3>
        Sorry, we couldn’t find the information or page you requested. There may have been a system error.
      </h3>

      <p>
        <b>Things to try:</b>
      </p>

      <ul>
        <li>
          Return to the
          {' '}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              browserHistory.goBack();
            }}
          >
            previous page
          </a>
          {' '}
          and try again.
        </li>

        <li>
          Or if you like... just return to the <Link to="/">home page</Link>.
        </li>
      </ul>
    </div>
</div>
);

export default Oops;
