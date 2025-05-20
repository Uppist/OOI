/** @format */

import React from "react";
import styles from "./how.module.css";
import image2 from "../../../../assets/Programme/TGT/image2.png";

export default function How() {
  return (
    <div className={styles.how}>
      <img src={image2} alt='' />

      <div className={styles.container}>
        <h2>How to Donate</h2>
        <p>
          To donate on The Giving Trybe, simply browse through our list of
          verified nonprofit organisations. Once you have found a nonprofit
          organisation that you would like to support, simply click on the
          "Donate" button and follow the instructions. You can make a one-time
          donation or set up a recurring donation.
        </p>{" "}
        <p>
          Thank you for supporting The Giving Trybe and nonprofit organisations!
        </p>
      </div>
    </div>
  );
}
