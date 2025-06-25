/** @format */

import React from "react";
import Content from "./Content";
import Navbar from "../Navbar/Navbar";
import Transaction from "./Transaction/Transaction";
import MobileTransaction from "./Transaction/MobileTransaction";

export default function MobileDashboard({
  handleSeeMore,
  Programme,
  title,
  resetDashboard,
  transactionLog,
}) {
  return (
    <div>
      <Navbar resetDashboard={resetDashboard} />
      {transactionLog !== null ? (
        <MobileTransaction title={title} />
      ) : (
        <Content
          handleSeeMore={handleSeeMore}
          Programme={Programme}
          title={title}
        />
      )}
    </div>
  );
}
