import React, {useState} from "react";
import { Button } from "../Button/Button";
import { ResetButton, SubmitButton } from "../Button/Button.stories";
import { Card } from "../Card/Card";
import { DropDown } from "../DropDown/DropDown";

import { Header } from "../Header/Header";
import { HeaderText } from "../HeaderText/HeaderText";
import { Image } from "../Image/Image";
import { InputBox } from "../InputBox/InputBox";
import "./page.css";

export const Page = () => {
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();

  const handleSubmit = () => {

  }

  const handleFieldChange = (event)=> {
    
  }

  return (
    <article>
      <section>
        <div className="headerSection">
          <HeaderText title="Flight Booking System" />
          <Image height="50rem" width="50rem" />
        </div>
        <form>
          <div className="searchBar">
            <div className="searchBox">
              <InputBox label="Source" placeholder="Source" />
            </div>
            <div className="searchBox">
              <InputBox label="Destination" placeholder="Destination" />
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
        <HeaderText title="Search Results:" size="medium" />
        <div className="flight-search-widget">
          <Card flightCompany="Indigo" source="Goa" destination="Pune" />
          <Card flightCompany="Vistara" source="Goa" destination="Pune" />
          <Card flightCompany="Air India" source="Goa" destination="Pune" />
        </div>
      </section>
    </article>
  );
};
