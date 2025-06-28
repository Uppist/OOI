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
  isLoadingTransactions,
  transactionDetail,
  totalRevenue,
  setTransactionDetail,
  total,
  transactionTitle,
}) {
  return (
    <div>
      <Navbar resetDashboard={resetDashboard} />
      {transactionLog !== null ? (
        <MobileTransaction
          title={title}
          transactionDetail={transactionDetail}
          isLoading={isLoadingTransactions}
          setTransactionDetail={setTransactionDetail}
        />
      ) : (
        <Content
          handleSeeMore={handleSeeMore}
          Programme={Programme}
          title={title}
          totalRevenue={totalRevenue}
          setTransactionDetail={setTransactionDetail}
          total={total}
          transactionTitle={transactionTitle}
        />
      )}
    </div>
  );
}
