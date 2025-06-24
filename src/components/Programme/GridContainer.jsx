/** @format */

import React from "react";
import styles from "./style.module.css";
import container from "./container.json";
import logo1 from "../../assets/Programme/logo1.svg";
import logo2 from "../../assets/Programme/logo2.svg";
import logo3 from "../../assets/Programme/logo3.svg";
import logo4 from "../../assets/Programme/logo4.svg";
import logo5 from "../../assets/Programme/logo5.svg";
import logo6 from "../../assets/Programme/logo6.svg";
import logo7 from "../../assets/Programme/logo7.svg";
import { Link } from "react-router-dom";
export default function GridContainer() {
  const logos = {
    "logo1.svg": logo1,
    "logo2.svg": logo2,
    "logo3.svg": logo3,
    "logo4.svg": logo4,
    "logo5.svg": logo5,
    // "logo6.svg": logo6,
    "logo7.svg": logo7,
  };

  return (
    <div className={styles.gridContainer}>
      {container.map((data, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={logos[data.logo]} alt='' />
          <hr />
          <div className={styles.text}>
            <span>{data.title}</span>
            <button className={styles[`button${index + 1}`]}>
              <Link to={data.link}>{data.button}</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
