/** @format */

import React from "react";
import styles from "./style.module.css";
import logo1 from "../../assets/UtilityIcon.svg";
import logo2 from "../../assets/UtilityIcon2.svg";
export default function Buttons() {
  return (
    <div className={styles.buttons}>
      <button>
        <img src={logo1} alt='' />
        About Us
      </button>
      <button>
        <img src={logo2} alt='' />
        Givengo
      </button>
    </div>
  );
}
