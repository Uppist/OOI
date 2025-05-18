/** @format */

import React from "react";
import styles from "./style.module.css";
import logo1 from "../../assets/Utilityicon.svg";
import logo2 from "../../assets/Utilityicon2.svg";
import { Link } from "react-router-dom";
export default function Buttons() {
  return (
    <div className={styles.buttons}>
      <button>
        <img src={logo1} alt='' />
        <Link to='/OOI'>About Us</Link>
      </button>
      <button>
        <img src={logo2} alt='' />
        <Link to='/givengo'>Givengo</Link>
      </button>
    </div>
  );
}
