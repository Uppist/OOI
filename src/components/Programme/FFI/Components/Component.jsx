/** @format */

import React from "react";
import contribute from "./component.json";
import styles from "./component.module.css";
import contribute1 from "../../../../assets/Programme/FFI/tailored.png";
import contribute2 from "../../../../assets/Programme/FFI/personalized.png";
import contribute3 from "../../../../assets/Programme/FFI/mentor.png";
import contribute4 from "../../../../assets/Programme/FFI/job.png";
import contribute5 from "../../../../assets/Programme/FFI/training.png";
import check from "../../../../assets/Programme/FFI/check_circle.svg";
export default function Component() {
  const Image = {
    "contribute1.png": contribute1,
    "contribute2.png": contribute2,
    "contribute3.png": contribute3,
    "contribute4.png": contribute4,
    "contribute5.png": contribute5,
  };
  return (
    <div className={styles.component}>
      {contribute.map((data, index) => (
        <div className={styles.div}>
          <div className={styles.container} key={index}>
            <img src={Image[data.img]} alt='' />
            <div className={styles.text}>
              <h2>{data.h2}</h2>
              <span>{data.text}</span>
            </div>
          </div>
          <ul className={styles.ul}>
            {[data.li1, data.li2, data.li3]
              .filter((li) => li)
              .map((li, index) => (
                <div key={index} className={styles.li}>
                  {" "}
                  <img src={check} />
                  <li>{li}</li>
                </div>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
