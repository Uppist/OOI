/** @format */

import React from "react";
import styles from "../../Programme/style.module.css";
import container from "../../Programme/container.json";
import logo1 from "../../../assets/Programme/logo1.svg";
import logo2 from "../../../assets/Programme/logo2.svg";
import logo3 from "../../../assets/Programme/logo3.svg";
import logo4 from "../../../assets/Programme/logo4.svg";
import logo5 from "../../../assets/Programme/logo5.svg";
import logo6 from "../../../assets/Programme/logo6.svg";
export default function GridContainer() {
  const logos = {
    "logo1.svg": logo1,
    "logo2.svg": logo2,
    "logo3.svg": logo3,
    "logo4.svg": logo4,
    "logo5.svg": logo5,
    "logo6.svg": logo6,
  };

  return (
    <div className={styles.gridContainer}>
      {container.slice(0, -1).map((data, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={logos[data.logo]} alt='' />
          <hr />
          <div className={styles.text}>
            <button className={styles[`give${index + 1}`]}>
              {data.button2}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
