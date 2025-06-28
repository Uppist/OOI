/** @format */

import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import image from "../../../assets/angle-left.svg";
import axios from "axios";

export default function Content({
  handleSeeMore,
  Programme,
  title,
  totalRevenue,
  total,
  transactionTitle = [],
}) {
  return (
    <div className={styles.content}>
      <span>{title}</span>
      <div className={styles.revenue}>
        <span>Total Revenue</span>
        <label>₦ {totalRevenue.toLocaleString()}</label>
      </div>

      <div className={styles.programmeRevenue}>
        {Programme.map((data, index) => {
          const programmeTitle = transactionTitle[index]?.title;
          const amount = total?.[programmeTitle] || 0;
          return (
            <div className={styles.text} key={index}>
              <span>{data.title}</span>
              <div>
                <span>₦{amount.toLocaleString()}</span>
                <button onClick={() => handleSeeMore(index)}>
                  See all
                  <img src={image} alt='' />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
