/** @format */

import React from "react";
import Overview from "./Overview/Overview";
import Problem from "./Problems/Problem";
import Contribution from "./Contribution/Contribution";
import Component from "./Components/Component";
import Programme from "./Programme/Programme";
import Campaign from "./Campaign/Campaign";
import Future from "./Future/Future";

export default function FFI() {
  return (
    <>
      <Overview />
      <Problem />
      <Contribution />
      <Component />
      <Programme />
      <Campaign />
      <Future />
    </>
  );
}
