/** @format */

import React from "react";
import Overview from "./First/Overview";
import Buttons from "./Buttons/Buttons";
import GridContainer from "./Second/GridContainer";
import Donations from "./Third/Donations";
import Funds from "./Fourth/Funds";
import Investment from "./Fifth/Investment";
import Sustainability from "./Sixth/Sustainability";

export default function Givengo() {
  return (
    <>
      <Overview />
      <GridContainer />
      <Donations />
      <Funds />
      <Investment />
      <Sustainability />
      <Buttons />
    </>
  );
}
