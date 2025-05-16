/** @format */

import React from "react";
import Overview from "./Overview/Overview";

import Areas from "./Areas/Areas";
import Operations from "./Operation/Operations";
import Campaign from "./Campaign/Campaign";
import Child from "./Child/Child";

export default function Off() {
  return (
    <>
      <Overview />
      <Areas />
      <Operations />
      <Campaign />
      <Child />
    </>
  );
}
