/** @format */

import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Content from "./Content";
import styles from "./style.module.css";
import Transaction from "./Transaction/Transaction";
import MobileDashboard from "./MobileDashboard";
import axios from "axios";

export default function Dashboard() {
  const Programme = [
    {
      title: "Health Programme Impact (HIP)",
    },
    {
      title: "October Future Funds (OFF)",
    },
    {
      title: "Future Forward Initiative (FFI)",
    },
    {
      title: "The Gero Programme (TGP)",
    },
    {
      title: "Haven Bloom Initiative (HBI)",
    },
    {
      title: "The Giving Trybe (TGT)",
    },
  ];

  const [totalRevenue, setTotalRevenue] = useState(0);
  const [transactionLog, setTransactionLog] = useState(null);

  const [transactionDetail, setTransactionDetail] = useState([]);

  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);

  const [navBarText, setNavBarText] = useState("Dashboard");

  function resetDashboard() {
    setNavBarText("Dashboard");
    setTransactionLog(null);
  }

  useEffect(() => {
    // Fetch total revenue
    axios
      .get("https://api.luround.com/v1/payments/ooi-total-revenue")
      .then((res) => {
        console.log(res.data.total_amount);
        setTotalRevenue(res.data.total_amount);
      })
      .catch((err) => {
        console.error("Error fetching total revenue:", err.message);
      });
  }, [transactionLog]);

  function handleSeeMore(index) {
    const selectedTitle = Programme[index]?.title;

    setNavBarText(selectedTitle);
    setTransactionLog(index);
    setIsLoadingTransactions(true); // Start loading

    axios
      .get(
        `https://api.luround.com/v1/payments/ooi-account-payment-logs?account_name=${encodeURIComponent(
          selectedTitle
        )}`
      )
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setTransactionDetail(res.data);
        } else {
          setTransactionDetail([]); // fallback to empty
        }
      })
      .catch((err) => {
        console.error("Error fetching account payment logs:", err.message);
        setTransactionDetail([]); // Also fallback if failed
      })
      .finally(() => {
        setIsLoadingTransactions(false); // Done loading
      });
  }

  return (
    <>
      <div className={styles.dashboard}>
        <NavBar title={navBarText} resetDashboard={resetDashboard} />
        <SideBar resetDashboard={resetDashboard} />
        {transactionLog !== null ? (
          <Transaction
            transactionDetail={transactionDetail}
            isLoading={isLoadingTransactions}
          />
        ) : (
          <Content
            handleSeeMore={handleSeeMore}
            Programme={Programme}
            totalRevenue={totalRevenue}
          />
        )}
      </div>

      {/* /*Mobile Dashboard */}
      <div className={styles.mobileDashboard}>
        {" "}
        <MobileDashboard
          title={navBarText}
          handleSeeMore={handleSeeMore}
          Programme={Programme}
          resetDashboard={resetDashboard}
          transactionLog={transactionLog}
          transactionDetail={transactionDetail}
          isLoading={isLoadingTransactions}
          totalRevenue={totalRevenue}
        />
      </div>
    </>
  );
}
