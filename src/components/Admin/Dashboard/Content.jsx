/** @format */

import React from "react";
import styles from "./style.module.css";
import image from "../../../assets/angle-left.svg";

export default function Content({ handleSeeMore, Programme }) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.revenue}>
        <span>Total Revenue</span>
        <label>₦1,000</label>
      </div>

      <div className={styles.programmeRevenue}>
        {Programme.map((data, index) => (
          <div className={styles.text} key={index}>
            <span>{data.title}</span>
            <div>
              <span>{data.amount}</span>
              <button onClick={() => handleSeeMore(index)}>
                See all
                <img src={image} alt='' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
