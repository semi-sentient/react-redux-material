import React from 'react';

import './footer.scss';

/**
* @desc Footer component renders a footer on the page with copyright notices and links to legal info.
* @example <Footer />
* @return {JSX}
*/
const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="copyright">
        Copyright &copy; {new Date().getFullYear()}
      </div>

      <div className="legal">
        <a
          href="https://github.com/semi-sentient/react-redux-material"
          rel="noopener noreferrer"
          target="_blank"
        >
          View on GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
