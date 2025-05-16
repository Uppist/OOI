/** @format */

import React from "react";
import styles from "./child.module.css";
import child from "../../../../assets/Programme/OFF/child.png";

export default function Child() {
  return (
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
  );
}
