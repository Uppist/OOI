/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import transaction from "./transaction.json";
import time from "../../../../assets/Dashboard/time.svg";
import right from "../../../../assets/Dashboard/icon.svg";
import csv from "../../../../assets/Dashboard/csv.svg";
import vector from "../../../../assets/Dashboard/Vector.svg";
import copy from "../../../../assets/Dashboard/copy.svg";
import delte from "../../../../assets/Dashboard/delte.svg";
import Buttons from "./Buttons";

export default function MobileTransaction({ title }) {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // useEffect(() => {
  //   const fetchLogs = async () => {
  //     try {
  //       const response = await axios.get("https://bot.uppist.xyz/logs");
  //       setLogs(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Failed to fetch logs:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchLogs();
  // }, []);

  const totalPages = Math.ceil(logs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLogs = logs.slice(startIndex, startIndex + itemsPerPage);
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

  function handleSeeMore(index) {
    setIsMore((prevIndex) => (prevIndex === index ? null : index));
  }

  function closeSeeMore() {
    setIsMore(false);
  }
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
          <button className={styles.csv}>
            <img src={csv} alt='' />
            Download CSV
          </button>
        </div>
      </div>

      <div className={styles.table}>
        {transaction.map((item, index) => (
          <div className={styles.container} key={index}>
            <div className={styles.header}>
              <div>
                <label>Name:</label> <span>{item.name}</span>
              </div>
              <img src={vector} alt='' onClick={() => handleClick(index)} />

              {isClick === index && (
                <div className={styles.dropdown} onClick={closeClick}>
                  <div className={styles.overlay} onClick={closeClick}></div>
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
              )}
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
                  <label>Phone Number:</label> <span>{item.number}</span>
                </div>
                <div className={styles.more}>
                  <label>Amount:</label> <span>{item.amount}</span>
                </div>
                <div className={styles.more}>
                  <label>Date/Time:</label> <span>{item.date}</span>
                </div>
              </div>
            )}
          </div>
        ))}

        <Buttons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
