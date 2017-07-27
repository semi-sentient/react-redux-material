import React from 'react';
import { Link } from 'react-router';

import Banner from 'app/components/banner/Banner';

const AccessDenied = () => (
  <div id="error">
    <Banner title="Access Denied" />

    <div className="container">
      <h3>Sorry, your account does not have permission to access the page you requested.</h3>

      <p><strong>Things to try:</strong></p>

      <ul>
        <li>Ensure your account has the correct permissions.</li>
        <li>Check the URL for errors, then hit the refresh button on your browser.</li>
        <li>Return to the <Link to="/">home page</Link>.</li>
      </ul>
    </div>
  </div>
);

export default AccessDenied;