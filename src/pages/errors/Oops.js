import React from 'react';
import { browserHistory, Link } from 'react-router';

require('./errors.scss');

const Oops = () => (
  <div className="content" id="errors">
    <main>
      <h1>Oops! Something Happened</h1>

      <h3>Sorry, we couldn’t find the information or page you requested. There may have been a system error.</h3>

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
    </main>
  </div>
);

export default Oops;
