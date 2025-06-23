/** @format */

import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Content from "./Content";
import Transaction from "./Transaction/Transaction";

export default function Dashboard() {
  const Programme = [
    {
      title: "Health Programme Impact (HIP)",
      amount: "₦148,800",
    },
    {
      title: "October Future Funds (OFF)",
      amount: "₦148,800",
    },
    {
      title: "Future Forward Initiative (FFI)",
      amount: "₦148,800",
    },
    {
      title: "The Gero Programme (TGP)",
      amount: "₦148,800",
    },
    {
      title: "Haven Bloom Initiative (HBI)",
      amount: "₦148,800",
    },
    {
      title: "The Giving Trybe (TGT)",
      amount: "₦148,800",
    },
  ];

  const [navBarText, setNavBarText] = useState("Dashboard");
  const [transactionLog, setTransactionLog] = useState(null);

  function handleSeeMore(index) {
    setNavBarText(Programme[index].title);
    setTransactionLog(index);
  }

  function resetDashboard() {
    setNavBarText("Dashboard");
    setTransactionLog(null);
  }
  return (
    <div>
      <NavBar title={navBarText} />
      <SideBar resetDashboard={resetDashboard} />
      {transactionLog !== null ? (
        <Transaction />
      ) : (
        <Content handleSeeMore={handleSeeMore} Programme={Programme} />
      )}
    </div>
  );
}
