import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './footer.css';

export const Footer = ({ primary, size, linkText, link, footerText, backgroundColor }) => {
  const mode = primary
    ? "footer--primary"
    : "footer--secondary";

  return(
      <div 
      className={["footer", `footer--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      >
        {footerText} {" "}<a href={link} target="_blank">{linkText}</a>
      </div>
)};

Footer.propTypes = {
  footerText: PropTypes.string.isRequired, 
  primary: PropTypes.bool,
  link: PropTypes.string,
  linkText: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Footer.defaultProps = {
  footerText: "Footer",
  primary: false,
  link: null,
  linkText: null,
  size: "medium"
};
