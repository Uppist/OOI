/** @format */

import React from "react";
import styles from "./support.module.css";
import logo1 from "../../../../assets/Programme/HIP/back.svg";

import support from "../../../../assets/Programme/HBI/image7.png";

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
        <Link to='/programme'>
          <img src={logo1} alt='' />
          Back
        </Link>
      </button>
    </div>
  );
}
