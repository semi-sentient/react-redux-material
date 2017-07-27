import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* @desc Message component is used to display success, error, or warning messages (optional close button).
* @example
*   <Message
*     isControl={true}
*     message="Oops"
*     type="warning"
*   />
* @param {Boolean} isControl    True to enable the "close" button
* @param {String} message       The message to display in the main content area
* @param {String} type          The type of message, which corresponds to a CSS class (Luna)
* @return {JSX}
*/
class Message extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true
    };

    this.close = this.close.bind(this);
  }

  close() {
    this.setState({
      isVisible: false
    });
  }

  render() {
    const { message, type, isControl } = this.props;
    const control = isControl ? 'control' : '';

    if (!this.state.isVisible) {
      return null;
    }

    return (
      <div
        className={`message ${type} ${control}`}>
        {isControl ? (
          <div
            className="close"
            onClick={this.close}
          >
            ×
          </div>
        ) : (null)}

        {message}
      </div>
    );
  }
}

Message.propTypes = {
  isControl: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Message;
