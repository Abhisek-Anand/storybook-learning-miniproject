import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './searchHeader.css';
import { Button } from '../Button/Button';
import { DropDown } from '../DropDown/DropDown';
import { InputBox } from '../InputBox/InputBox';

export const SearchHeader = ({ primary, size, backgroundColor }) => {
  const mode = primary
    ? "searchHeader--primary"
    : "searchHeader--secondary";

    const [source, setSource] = useState();
  const [destination, setDestination] = useState();

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSourceChange = (value)=> {
  console.log("🚀 ~ file: Page.jsx ~ line 22 ~ handleSourceChange ~ value", value)
    setSource(value)
  }
  const handleDestinationChange = (value)=> {
  console.log("🚀 ~ file: Page.jsx ~ line 25 ~ handleDestinationChange ~ value", value)
    setDestination(value)
  }

  return(
      <div 
      className={["searchHeader", `searchHeader--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      >
        <form onSubmit={handleSubmit}>
          <div className="searchBar">
            <div className="searchBox">
              <InputBox label="Source" placeholder="Source" fieldValue={source}  handleFieldChange={handleSourceChange}/>
            </div>
            <div className="searchBox">
              <InputBox label="Destination" fieldValue={destination} handleFieldChange={handleDestinationChange} placeholder="Destination" />
            </div>
            <div className="searchBox">
              <DropDown label="No. of passengers" />
            </div>
            <div className="searchBar-buttons">
              <div className="button">
                <Button backgroundColor="green" size="small" label="Submit" />
              </div>
              <div className="button">
                <Button backgroundColor="red" size="small" label="Reset" />
              </div>
            </div>
          </div>
        </form>
      </div>
)};

SearchHeader.propTypes = {
  title: PropTypes.string.isRequired, 
  primary: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

SearchHeader.defaultProps = {
  title: "Header",
  primary: false,
  color: null,
  size: "large"
};
