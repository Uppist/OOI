/** @format */

import React from "react";
import Overview from "./Overview/Overview";
import Problem from "./Overview/Problem";
import Solution from "./Solutions/Solution";
import Campaign from "./Campaign/Campaign";
import Support from "./Support/Support";

export default function Hbi() {
  return (
    <>
      <Overview />
      <Problem />
      <Solution />
      <Campaign />
      <Support />
    </>
  );
}
