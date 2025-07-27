/** @format */

import React from "react";
import styles from "./child.module.css";
import child from "../../../../assets/Programme/OFF/child.png";
// import logo1 from "../../../../assets/Programme/HIP/back.svg";
import logo1 from "../../../../assets/Utilityicon.svg";

import { Link } from "react-router-dom";

export default function Child() {
  return (
    <div className={styles.button}>
      <div className={styles.child}>
        <div>
          <h2>
            Give Every Child Access to <span>Quality Education.</span>
          </h2>
          <p>
            If you would like to gift the OFF with a sizable donation, kindly
            reach out to us via email <b>off@octoberorange.org.</b>
          </p>
        </div>
        <img src={child} alt='' />
      </div>

      <button>
        <Link to='/programmes'>
          {" "}
          <img src={logo1} alt='' />
          Back
        </Link>
      </button>
    </div>
  );
}
