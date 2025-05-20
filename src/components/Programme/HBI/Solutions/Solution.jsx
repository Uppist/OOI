/** @format */

import React from "react";
import solution from "./solution.json";
import styles from "./solution.module.css";
import image3 from "../../../../assets/Programme/HBI/image3.png";
import image4 from "../../../../assets/Programme/HBI/image4.png";
import image5 from "../../../../assets/Programme/HBI/image5.png";
import check from "../../../../assets/Programme/HBI/check_circle.svg";
export default function Solution() {
  const Image = {
    "image1.png": image3,
    "image2.png": image4,
    "image3.png": image5,
  };
  return (
    <div className={styles.solution}>
      {solution.map((data, index) => (
        <div key={index} className={styles.container}>
          <img src={Image[data.img]} alt='' />
          <div className={styles.text}>
            <h2>{data.text}</h2>
            <span>{data.text2}</span>
            {[data.li1, data.li2, data.li3, data.li4]
              .filter((li) => li)
              .map((li, idx) => (
                <div key={idx} className={styles.li}>
                  <img src={check} />
                  <li>{li}</li>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
