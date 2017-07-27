import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

require('./nav.scss');

/**
 * @desc Header component renders a header with site navigation.
 * 
 * @example <NavLink title="Contact Us" to="/contact-us" onClick={(e) => console.log('contact us link clicked', e)} />
 * @example <NavLink title="Google Search" href="//google.com" target="_blank" />
 * 
 * @param {String} href             Used to link to a URL not controlled by react router (e.g. href="https://mysite.com")
 * @param {Boolean} isDisabled      true to add a ".disabled" class
 * @param {Function} onClick        Callback when a link is clicked
 * @param {String} target           Used in conjunction with href to specify the target (e.g. target="_blank")
 * @param {String} title            The link title (e.g. title="Contact Us")
 * @param {String} to               Route handled by react router (e.g. to="/contact-us")
 * @return {JSX}
 */
const NavLink = ({
  href,
  isDisabled,
  onClick,
  target,
  title,
  to
}, context) => {
  const baseClass = 'nav-item';
  const location = context && context.router ? context.router.getCurrentLocation().pathname : '';
  const className = location.includes(to) ? `${baseClass} active-nav` : baseClass;

  const commonProps = {
    className: isDisabled ? 'disabled' : '',
    onClick: (e) => {
      if (isDisabled) {
        e.preventDefault();
      }

      onClick();
    }
  };

  return (
    <span className={className}>
      {href ? (
        <a href={href} target={target} {...commonProps}>
          {title}
        </a>
      ) : (
        <Link to={to} {...commonProps}>
          {title}
        </Link>
      )}
    </span>
  );
};

NavLink.contextTypes = {
  router: PropTypes.object
};

NavLink.defaultProps = {
  href: '',
  isDisabled: false,
  onClick: () => {},
  target: ''
};

NavLink.propTypes = {
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default NavLink;
