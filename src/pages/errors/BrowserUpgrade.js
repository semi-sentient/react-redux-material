import React from 'react';

import Banner from 'app/components/banner/Banner';

const BrowserUpgrade = () => (
  <div id="error">
    <Banner title="For security reasons, please update your web browser." />

    <div className="container">
      <h3>
        You are using an unsupported web browser.
      </h3>

      <p>
        To give you the safest, fastest, and most secure experience possible we recommend upgrading to {' '}
        <a
          href="https://www.google.com/intl/en/chrome/browser/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Chrome
        </a>, {' '}
        <a
          href="http://windows.microsoft.com/en-us/internet-explorer/download-ie"
          rel="noopener noreferrer"
          target="_blank"
        >
          Microsoft Internet Explorer 11
        </a>, or {' '}
        <a
          href="https://www.microsoft.com/en-us/windows/microsoft-edge#cqDOHlCqklXXhJzD.97"
          rel="noopener noreferrer"
          target="_blank"
        >
          Microsoft Edge
        </a>.
      </p>
    </div>
  </div>
);

export default BrowserUpgrade;
