/** @format */

import React from "react";
import styles from "./future.module.css";
import logo1 from "../../../../assets/Donate/ffiback.png";

import future from "../../../../assets/Programme/FFI/future.png";
import { Link } from "react-router-dom";

export default function Future() {
  return (
    <div className={styles.button}>
      {" "}
      <div className={styles.child}>
        <div>
          <h2>
            Empower the Youths for a <span>Brighter Future!</span>
          </h2>
          <p>
            If you would like to gift the FFI programme with a sizable donation,
            kindly reach out to us via email at <b>ffi@octoberorange.org.</b>
          </p>
        </div>
        <img src={future} alt='' />
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
