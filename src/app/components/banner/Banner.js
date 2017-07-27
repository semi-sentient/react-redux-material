import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';

require('./banner.scss');

/**
* @desc Banner component is useful for highlighting content at the top of the page.
* @example
*   <Banner
*     isLoading
*     title="Welcome"
*   />
* @param {Array} children     DOM child nodes to be rendered in "banner" wrapper
* @param {Boolean} isLoading  true to show "LinearProgress"
* @param {String} title       Title to display in title section
* @return {JSX}
*/
const Banner = ({
  children,
  isLoading,
  title
}) => (
  <div id="banner">
    <div className="container">
      <div className="header-area">
        <div className="title">
          {title}
        </div>

        <div>{children}</div>
      </div>
    </div>

    {isLoading ? (
      <LinearProgress mode="indeterminate" />
    ) : (null)}
  </div>
);

Banner.propTypes = {
  isLoading: PropTypes.bool,
  title: PropTypes.string.isRequired
};

Banner.defaultProps = {
  isLoading: false
};

export default Banner;
