/** @format */

import React from "react";
import styles from "../../Programme/style.module.css";
import logo1 from "../../../assets/Utilityicon.svg";
import logo2 from "../../../assets/Utilityicon2.svg";
import { Link } from "react-router-dom";
export default function Buttons() {
  return (
    <div className={styles.buttons}>
      <button>
        <img src={logo1} alt='' />
        <Link to='/programmes'>Programmes</Link>
      </button>
      <button>
        <img src={logo2} alt='' />
        <Link to='/newsroom'>Newsroom</Link>
      </button>
    </div>
  );
}
