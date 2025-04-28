/** @format */

import React from "react";
import image11 from "../../../assets/Aboutus/image11.png";
import styles from "./style.module.css";

export default function Fifth() {
  return (
    <div className={styles.fifth}>
      <div className={styles.container}>
        <h2>
          Partner With Us To <span>Empower</span> Communities.
        </h2>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <span>If you would like to reach out to us,</span>
            <button>Get In Touch</button>
          </div>
          <div className={styles.button}>
            <span>If you would like to learn about our initiatives,</span>
            <button>See Programmes</button>
          </div>
        </div>
      </div>

      <img src={image11} alt='' />
    </div>
  );
}
