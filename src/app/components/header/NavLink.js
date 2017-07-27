import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

require('./nav.scss');

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
