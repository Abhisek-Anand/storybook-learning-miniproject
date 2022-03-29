import React from "react";
import PropTypes from "prop-types";
import "./image.css";

/**
 * Primary UI component for user interaction
 */
export const Image = ({ primary, backgroundColor,height, width, size,alt,src, label, ...props }) => {
  const mode = primary
    ? "image--primary"
    : "image--secondary";
  return (
    <img
      className={["image", `image--${size}`, mode].join(
        " "
      )}
      height={height}
      width={width}
      alt={alt}
      src={src}
      style={backgroundColor && { backgroundColor }}
      {...props}
    />
  );
};

Image.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["circle", "square", "large"]),
  alt: PropTypes.string.isRequired,
  height:PropTypes.string,
  width:PropTypes.string,
};

Image.defaultProps = {
  backgroundColor: null,
  height:"100rem",
  width:"100rem",
  size: "medium",
  alt: "image",
  src: "https://source.unsplash.com/random"
};
