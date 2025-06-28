/** @format */

import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import time from "../../../../assets/Dashboard/time.svg";
import right from "../../../../assets/Dashboard/icon.svg";
import csv from "../../../../assets/Dashboard/csv.svg";
import vector from "../../../../assets/Dashboard/Vector.svg";
import copy from "../../../../assets/Dashboard/copy.svg";
import delte from "../../../../assets/Dashboard/delte.svg";
import Buttons from "./Buttons";

export default function Transaction({ transactionDetail }) {
  const [logs, setLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(logs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLogs = logs.slice(startIndex, startIndex + itemsPerPage);

  const [isClick, setIsClick] = useState(null);
  const [isTime, setIsTime] = useState(false);
  const [selectedTime, setSelectedTime] = useState("All Time");

  const Time = [
    "Today",
    "Yesterday",
    "This week",
    "Last 7 days",
    "This month",
    "Last 30 days",
    "All Time",
  ];

  useEffect(() => {
    setLogs(transactionDetail || []);
  }, [transactionDetail]);

  const handleClick = (index) => setIsClick(index);
  const closeClick = () => setIsClick(null);
  const handleTime = (item) => {
    setSelectedTime(item);
    setIsTime(false);
  };
  const closeTime = () => setIsTime(false);

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

  return (
    <div className={styles.transaction}>
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
        <div className={styles.tableHeader}>
          <div className={`${styles.name} ${styles.headerText}`}>
            <span className={styles.firstName}>User Name</span>
            <span>Email Address</span>
            <span>Phone Number</span>
            <span>Amount</span>
            <span>Date/Time</span>
            <span className={styles.svg}>Svg</span>
          </div>

          {!logs || logs.length === 0 ? (
            <div className={styles.span}>No transaction available</div>
          ) : (
            <>
              {currentLogs.map((data, index) => (
                <div className={styles.name} key={index}>
                  <span>{data.first_name}</span>
                  <span>{data.email}</span>
                  <span>{data.phone_number}</span>
                  <span>₦{Number(data.amount).toLocaleString()}</span>
                  <span>{data.date}</span>
                  <img src={vector} alt='' onClick={() => handleClick(index)} />
                  {isClick === index && (
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
                        <span onClick={() => handleDelete(data._id)}>
                          <img src={delte} alt='' />
                          Delete
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>

        <Buttons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
