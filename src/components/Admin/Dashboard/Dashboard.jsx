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
      title: "Health Impact Programme (HIP)",
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

  const transactionTitle = [
    {
      title: "Health Impact Programme",
    },
    {
      title: "October Future Fund",
    },
    {
      title: "Future Forward Initiative",
    },
    {
      title: "The Gero Programme",
    },
    {
      title: "Haven Bloom Initiative",
    },
    {
      title: "The Giving Trybe",
    },
  ];

  const [totalRevenue, setTotalRevenue] = useState(0);
  const [transactionLog, setTransactionLog] = useState(null);

  const [transactionDetail, setTransactionDetail] = useState([]);

  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);

  const [navBarText, setNavBarText] = useState("Dashboard");
  const [totalAmount, setTotalAmount] = useState({});

  function resetDashboard() {
    setNavBarText("Dashboard");
    setTransactionLog(null);
  }

  useEffect(() => {
    // Fetch total revenue
    axios
      .get("https://api.luround.com/v1/payments/ooi-total-revenue")
      .then((res) => {
        setTotalRevenue(Number(res.data.total_amount));
      })
      .catch((err) => {
        console.error("Error fetching total revenue:", err.message);
      });
  }, [transactionLog]);

  useEffect(() => {
    async function fetchAllProgrammeTotals() {
      const totals = {};

      for (const prog of transactionTitle) {
        try {
          const res = await axios.get(
            `https://api.luround.com/v1/payments/ooi-account-payment-logs?account_name=${prog.title}`
          );

          const total = res.data.reduce(
            (sum, item) => sum + Number(item.amount || 0),
            0
          );
          totals[prog.title] = total;
        } catch (error) {
          console.error(
            `Error fetching logs for ${prog.title}:`,
            error.message
          );
          totals[prog.title] = 0;
        }
      }

      setTotalAmount(totals);
    }

    fetchAllProgrammeTotals();
  }, []);

  function handleSeeMore(index) {
    const selectedTitle = transactionTitle[index]?.title;

    setNavBarText(selectedTitle);
    setTransactionLog(index);
    setIsLoadingTransactions(true); // Start loading

    axios
      .get(
        `https://api.luround.com/v1/payments/ooi-account-payment-logs?account_name=${selectedTitle}`
      )
      .then((res) => {
        console.log("Fetched transaction logs:", res.data);
        if (Array.isArray(res.data) && res.data.length > 0) {
          setTransactionDetail(res.data);
          // console.log("Transaction details:", transactionDetail[0]?.amount);
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
            setTransactionDetail={setTransactionDetail}
          />
        ) : (
          <Content
            handleSeeMore={handleSeeMore}
            Programme={Programme}
            totalRevenue={totalRevenue}
            setTransactionDetail={setTransactionDetail}
            total={totalAmount}
            transactionTitle={transactionTitle}
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
          setTransactionDetail={setTransactionDetail}
          total={totalAmount}
          transactionTitle={transactionTitle}
        />
      </div>
    </>
  );
}
