/** @format */

import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import transaction from "./transaction.json";
import time from "../../../../assets/Dashboard/time.svg";
import right from "../../../../assets/Dashboard/icon.svg";
import csv from "../../../../assets/Dashboard/csv.svg";
import vector from "../../../../assets/Dashboard/Vector.svg";
import copy from "../../../../assets/Dashboard/copy.svg";
import delte from "../../../../assets/Dashboard/delte.svg";
import Buttons from "./Buttons";

export default function MobileTransaction({
  title,
  isLoadingTransactions,
  transactionDetail,
  setTransactionDetail,
}) {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [isClick, setIsClick] = useState(null);
  const [isTime, setIsTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState("All Time");
  const [isMore, setIsMore] = useState(null);
  const [selectMore, setSelectedMore] = useState(null);

  const Time = [
    "Today",
    "Yesterday",
    "This week",
    "Last 7 days",
    "This month",
    "Last 30 days",
    "All Time",
  ];

  function handleClick(index) {
    setIsClick(index);
  }

  function closeClick() {
    setIsClick(false);
  }

  function handleTime(item) {
    setSelectedTime(item);
    setIsTime((prev) => !prev);
  }
  function closeTime() {
    setIsTime(false);
  }

  useEffect(() => {
    setLogs(transactionDetail || []);
  }, [transactionDetail]);

  function handleSeeMore(index) {
    setIsMore((prevIndex) => (prevIndex === index ? null : index));
  }

  const downloadCSV = () => {
    const csvContent = logs
      .map(
        (data) =>
          `${data.first_name},${data.email},${data.phone_number},${data.amount},${data.date}`
      )
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transactions.csv";
    link.click();
  };

  function filterByTime(logs) {
    const now = new Date();

    return logs.filter((log) => {
      const logDate = new Date(log.date);

      switch (selectedTime) {
        case "Today":
          return logDate.toDateString() === now.toDateString();

        case "Yesterday":
          const yesterday = new Date();
          yesterday.setDate(now.getDate() - 1);
          return logDate.toDateString() === yesterday.toDateString();

        case "This week":
          const firstDayOfWeek = new Date(now);
          firstDayOfWeek.setDate(now.getDate() - now.getDay());
          return logDate >= firstDayOfWeek;

        case "Last 7 days":
          const sevenDaysAgo = new Date();
          sevenDaysAgo.setDate(now.getDate() - 6);
          return logDate >= sevenDaysAgo;

        case "This month":
          return (
            logDate.getMonth() === now.getMonth() &&
            logDate.getFullYear() === now.getFullYear()
          );

        case "Last 30 days":
          const thirtyDaysAgo = new Date();
          thirtyDaysAgo.setDate(now.getDate() - 29);
          return logDate >= thirtyDaysAgo;

        default:
          return true; // "All Time"
      }
    });
  }
  const filteredLogs = filterByTime(logs);
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLogs = filteredLogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className={styles.mobiletransaction}>
      <span>{title}</span>
      <div className={styles.log}>
        <span>Transaction Log</span>
        <div className={styles.div}>
          <button className={styles.time} onClick={() => setIsTime(!isTime)}>
            <img src={time} alt='' />
            {selectedTime}
            <img src={right} alt='' />
          </button>
          {isTime && (
            <div className={styles.dropdownTime}>
              <div className={styles.overlay} onClick={closeTime}></div>
              <div className={styles.copy}>
                {Time.map((item, index) => (
                  <span key={index} onClick={() => handleTime(item)}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          <button className={styles.csv} onClick={downloadCSV}>
            <img src={csv} alt='' />
            Download CSV
          </button>
        </div>
      </div>

      <div className={styles.table}>
        {!filteredLogs || filteredLogs.length === 0 ? (
          <div className={styles.span2}>No transaction available</div>
        ) : (
          <>
            {currentLogs.map((item, index) => (
              <div className={styles.container} key={index}>
                <div className={styles.header}>
                  <div>
                    <label>Name:</label> <span>{item.first_name}</span>
                  </div>
                  <img src={vector} alt='' onClick={() => handleClick(index)} />

                  {/* {isClick === index && (
                    <div className={styles.dropdown} onClick={closeClick}>
                      <div
                        className={styles.overlay}
                        onClick={closeClick}
                      ></div>
                      <div className={styles.copy}>
                        <span>
                          <img src={copy} alt='' />
                          Copy
                        </span>
                        <span>
                          <img src={delte} alt='' />
                          Delete
                        </span>
                      </div>
                    </div>
                  )} */}
                </div>
                <button
                  onClick={() => handleSeeMore(index)}
                  className={isMore === index ? styles.seeLess : styles.seeMore}
                >
                  {isMore === index ? "See Less" : "See More"}
                </button>
                {isMore === index && (
                  <div className={styles.moreInfo}>
                    <div className={styles.more}>
                      <label>Email:</label> <span>{item.email}</span>
                    </div>
                    <div className={styles.more}>
                      <label>Phone Number:</label>{" "}
                      <span>{item.phone_number}</span>
                    </div>
                    <div className={styles.more}>
                      <label>Amount:</label>{" "}
                      <span>₦{Number(item.amount).toLocaleString()}</span>
                    </div>
                    <div className={styles.more}>
                      <label>Date/Time:</label> <span>{item.date}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        <Buttons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
