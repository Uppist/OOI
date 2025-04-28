/** @format */

import React from "react";
import styles from "./style.module.css";
import image from "../../../assets/Aboutus/image.png";
import svg from "../../../assets/down-arrow.svg";

export default function FirstSection() {
  return (
    <div className={styles.firstSection}>
      <img src={image} alt='' />
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <h2>Inspiring Change, Driving Impact</h2>
          <p>
            committed to catalysing positive change and delivering tangible
            results that uplift individuals and communities.
          </p>
        </div>
        <img src={svg} alt='' />
      </div>
    </div>
  );
}
