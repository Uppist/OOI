/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import image from "../../../assets/Aboutus/image.png";
import image2 from "../../../assets/Aboutus/mobileimage.png";

import svg from "../../../assets/down-arrow.svg";

export default function FirstSection() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={styles.firstSection}>
      {/* <img className={styles.desktopImage} src={image} alt='' /> */}
      {/* <img className={styles.mobileImage} src={image2} alt='' /> */}

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
