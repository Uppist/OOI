/** @format */

import React from "react";
import styles from "./support.module.css";
import logo1 from "../../../../assets/Programme/HIP/back.svg";

import support from "../../../../assets/Programme/TGP/image8.png";

export default function Support() {
  return (
    <div className={styles.button}>
      {" "}
      <div className={styles.child}>
        <div>
          <h2>
            Support Our Seniors – Give the <span>Gift of Care!</span>
          </h2>
          <p>
            If you would like to gift TGP with a sizable donation, kindly reach
            out to us via email at <b>tgp@octoberorange.org.</b>
          </p>
        </div>
        <img src={support} alt='' />
      </div>
      <button>
        {" "}
        <img src={logo1} alt='' />
        Back
      </button>
    </div>
  );
}
