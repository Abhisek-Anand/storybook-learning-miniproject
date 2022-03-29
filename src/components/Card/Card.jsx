import React from "react";
import PropTypes from "prop-types";
import "./card.css";
import { HeaderText } from "../HeaderText/HeaderText";
import { PrimaryButton } from "../Button/Button.stories";

/**
 * Primary UI component for user interaction
 */
export const Card = ({ backgroundColor, size, label, ...props }) => {
  const { source, destination, arrivalTime, departureTime,flightCompany } = props;
  return (
    <div className="card">
      <div className="cardHeader">
        <HeaderText primary color="Purple" title={flightCompany} />
      </div>
      <div className="cardHeader">
        <HeaderText secondary title="Flight Details:" size="medium" />
      </div>
      <br />
      {source} to {destination}
      <br />
      {arrivalTime} - {departureTime}
      <div className="priceSection">
        <HeaderText title="6475" size="medium" />
        <PrimaryButton primary label="Buy" size="small" />
      </div>
    </div>
  );
};

Card.propTypes = {
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

  onClick: PropTypes.func,
};

Card.defaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
  source: "source",
  destination: "destination",
  arrivalTime: "02:00PM",
  departureTime: "04:00PM",
  flightCompany: "Indigo"
};
