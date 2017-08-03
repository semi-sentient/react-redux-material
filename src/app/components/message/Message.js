import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './message.scss';

/**
* @desc Message component is used to display success, error, or warning messages (optional close button).
* @example
*   <Message
*     isControl={true}
*     title="Oops"
*     type="warning"
*   />
* @param {Boolean} isControl    True to enable the "close" button
* @param {String} title         The message to display in the main content area
* @param {String} type          The type of message, which corresponds to a CSS class (Luna)
* @return {JSX}
*/
class Message extends Component {
  static defaultProps = {
    isControl: false,
    type: 'info'
  };

  static propTypes = {
    isControl: PropTypes.bool,
    title: PropTypes.string.isRequired,
    type: PropTypes.string
  };

  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    };
  }

  close = () => {
    this.setState({
      isVisible: false
    });
  };

  render() {
    const {
      title,
      type,
      isControl
    } = this.props;

    if (!this.state.isVisible) {
      return null;
    }

    return (
      <div
        className={`message ${type}`}>
        {isControl ? (
          <div
            className="close"
            onClick={this.close}
          >
            ×
          </div>
        ) : (null)}

        {title}
      </div>
    );
  }
}

export default Message;
