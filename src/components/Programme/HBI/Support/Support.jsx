/** @format */

import React from "react";
import styles from "./support.module.css";
import logo1 from "../../../../assets/Donate/hbiback.png";

import support from "../../../../assets/Programme/HBI/image7.png";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className={styles.button}>
      {" "}
      <div className={styles.child}>
        <div>
          <h2>
            Heal Minds,
            <span>Restore Hope!</span>
          </h2>
          <p>
            If you would like to gift HBI with a sizable donation, kindly reach
            out to us via email at <b>hbi@octoberorange.org.</b>
          </p>
        </div>
        <img src={support} alt='' />
      </div>
      <button>
        {" "}
        <Link to='/programmes'>
          <img src={logo1} alt='' />
          Back
        </Link>
      </button>
    </div>
  );
}
