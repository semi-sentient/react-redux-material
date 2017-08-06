import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';

/**
 * Wrapper for Material-UI LinearProgress component with custom CSS (class applied).
 * 
 * @example
 *  <Loading isLoading={true|false} />
 * @param {Boolean} isLoading
 * @return {JSX}
 */
const Loading = ({
  isLoading
}) => {
  if (isLoading) {
    return (
      <LinearProgress
        className="material-ui-linear-progress"
        mode="indeterminate"
      />
    );
  }

  return null;
};

Loading.defaultProps = {
  isLoading: false
};

Loading.propTypes = {
  isLoading: PropTypes.bool
};

export default Loading;