import React from 'react';
import PropTypes from 'prop-types';

import './headerText.css';

export const HeaderText = ({ title, primary, size, color }) => {
  const mode = primary
    ? "headerText--primary"
    : "headerText--secondary";
  return(
      <div 
      className={["headerText", `headerText--${size}`, mode].join(
        " "
      )}
      style={color && { color }}
      >
        {title}
      </div>
)};

HeaderText.propTypes = {
  title: PropTypes.string.isRequired, 
  primary: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

HeaderText.defaultProps = {
  title: "Header",
  primary: false,
  color: null,
  size: "large"
};
