import React, {useState} from "react";
import { Button } from "../Button/Button";
import { ResetButton, SubmitButton } from "../Button/Button.stories";
import { Card } from "../Card/Card";
import { DropDown } from "../DropDown/DropDown";
import { Footer } from "../Footer/Footer";

import { Header } from "../Header/Header";
import { HeaderText } from "../HeaderText/HeaderText";
import { Image } from "../Image/Image";
import { InputBox } from "../InputBox/InputBox";
import { SearchHeader } from "../SearchHeader/SearchHeader";
import "./page.css";

export const Page = () => {


  return (
    <div className="page">
      <section>
        <div className="headerSection">
          <HeaderText title="Flight Booking System" />
          <Image height="50rem" width="50rem" />
        </div>
        <hr/>
        <SearchHeader/>
        <HeaderText title="Search Results:" size="medium" />
        <div className="flight-search-widget">
          <Card flightCompany="Indigo" source="Goa" destination="Pune" />
          <Card flightCompany="Vistara" source="Goa" destination="Pune" />
          <Card flightCompany="Air India" source="Goa" destination="Pune" />
        </div>
        <Footer footerText="@2022 Copyright:" linkText="www.primary.link" link="www.primary.link" />
      </section>
    </div>
  );
};
