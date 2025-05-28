/** @format */

import React, { useState } from "react";
import styles from "./donate.module.css";

export default function DonationButton({
  color,
  isData,
  setIsData,
  currentConfig,
  Details,
  isError,
}) {
  const [activeAmount, setActiveAmount] = useState("");

  const [buttonClick, setButtonClick] = useState("");

  function amountClick(amount) {
    setIsData({ ...isData, amount });
    setActiveAmount(amount);
  }

  function Click(click) {
    setButtonClick(click);
  }
  return (
    <>
      <div className={styles.amount}>
        <span>Choose a donation amount</span>
        <div
          style={{ "--theme-color": color }}
          className={styles.amountContainer}
        >
          <div
            onClick={() => amountClick("5000")}
            className={activeAmount === "5000" ? styles.active : ""}
            style={{ border: `1px solid ${color}`, color: color }}
          >
            ₦5,000
          </div>
          <div
            onClick={() => amountClick("10000")}
            className={activeAmount === "10000" ? styles.active : ""}
            style={{ border: `1px solid ${color}`, color: color }}
          >
            ₦10,000
          </div>
          <div
            onClick={() => amountClick("15000")}
            className={activeAmount === "15000" ? styles.active : ""}
            style={{ border: `1px solid ${color}`, color: color }}
          >
            ₦15,000
          </div>
          <div
            onClick={() => amountClick("20000")}
            className={activeAmount === "20000" ? styles.active : ""}
            style={{ border: `1px solid ${color}`, color: color }}
          >
            ₦20,000
          </div>
          <div
            onClick={() => amountClick("25000")}
            className={activeAmount === "25000" ? styles.active : ""}
            style={{ border: `1px solid ${color}`, color: color }}
          >
            ₦25,000
          </div>
        </div>
      </div>
      <div className={styles.or}>
        <hr />
        <span>OR</span>
        <hr />
      </div>
      <div className={styles.image}>
        <div className={styles.donation}>
          <div className={styles.amount}>
            <span>Enter a custom donation amount</span>
            <div className={styles.enterAmount}>
              <div className={styles.naira} style={{ backgroundColor: color }}>
                ₦
              </div>
              <div className={styles.error}>
                <input
                  type='number'
                  name='amount'
                  id=''
                  value={isData.amount}
                  onChange={(e) => Details(e)}
                  placeholder='Enter Amount'
                />
                {isError.amount && (
                  <p className={styles.error2}>{isError.amount}</p>
                )}
              </div>
            </div>
          </div>
          <div className={styles.amount}>
            <span>Choose a donation frequency</span>
            <div
              style={{ "--theme-color": color }}
              className={styles.amountContainer}
            >
              <div
                onClick={() => Click("One Time")}
                className={buttonClick === "One Time" ? styles.active : ""}
                style={{ border: `1px solid ${color}`, color: color }}
              >
                One-Time
              </div>
              <div
                onClick={() => Click("Monthly")}
                className={buttonClick === "Monthly" ? styles.active : ""}
                style={{ border: `1px solid ${color}`, color: color }}
              >
                Monthly
              </div>
            </div>
          </div>
        </div>
        <img src={currentConfig.logo} alt='' />
      </div>
    </>
  );
}
