/** @format */

import React from "react";
import styles from "./style.module.css";

export default function Transaction() {
  return (
    <div className={styles.transaction}>
      <div className={styles.log}>
        <span>Transaction Log</span>
        <div className={styles.div}>
          <button className={styles.time}>All Time</button>
          <button className={styles.csv}>Download CSV</button>
        </div>
      </div>
      <div></div>
      <div>
        <button>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
}
