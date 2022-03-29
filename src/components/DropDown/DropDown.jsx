import React from "react";
import PropTypes from "prop-types";
import "./dropDown.css";

/**
 * Primary UI component for user interaction
 */
export const DropDown = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? "dropDown--primary"
    : "dropDown--secondary";
  return (
    <div>
      <label for="cars">{label}</label>
      <br/>
      <select
        name="cars"
        id="cars"
        className={["dropDown", `dropDown--${size}`, mode].join(
          " "
        )}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    </div>
  );
};

DropDown.propTypes = {
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
  size: PropTypes.oneOf(["small", "medium", "large"]),
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

DropDown.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
  placeholder: "Input text here",
};
