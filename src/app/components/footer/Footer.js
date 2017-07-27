import React from 'react';

require('./footer.scss');

/**
* @desc Footer component renders a footer on the page with copyright notices and links to legal info.
* @example <Footer />
* @return {JSX}
*/
const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div id="copyright">
        Copyright &copy; {new Date().getFullYear()}
      </div>

      <div id="legal">
        <a
          href="//google.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Link to Google
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
