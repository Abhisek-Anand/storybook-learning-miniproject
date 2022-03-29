import React from 'react';
import PropTypes from 'prop-types';
import './inputBox.css';

/**
 * Primary UI component for user interaction
 */
export const InputBox = ({ primary, backgroundColor, size, label, ...props }) => {
  
  return (
    <div className="inputTextBoxContainer">
    <label>{label}</label>
    <br/>
    <input
      type="text"
      className={`inputTextBox ${size}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    />
    </div>
  );
};

InputBox.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the InputBox be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * InputBox contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  placeholder: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

InputBox.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  placeholder: "Input text here"
};
