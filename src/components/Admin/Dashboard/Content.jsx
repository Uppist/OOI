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
}) {
  return (
    <div className={styles.content}>
      <span>{title}</span>
      <div className={styles.revenue}>
        <span>Total Revenue</span>
        <label>₦{totalRevenue}</label>
      </div>

      <div className={styles.programmeRevenue}>
        {Programme.map((data, index) => (
          <div className={styles.text} key={index}>
            <span>{data.title}</span>
            <div>
              <span>₦</span>
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
