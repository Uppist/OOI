/** @format */

import React from "react";
import styles from "./style.module.css";
import area from "./area.json";
import image4 from "../../../assets/Aboutus/image4.png";
import image5 from "../../../assets/Aboutus/image5.png";
import image6 from "../../../assets/Aboutus/image6.png";
import image7 from "../../../assets/Aboutus/image7.png";
import image8 from "../../../assets/Aboutus/image8.png";

export default function Third() {
  const ImageMap = {
    "image1.png": image4,
    "image2.png": image5,
    "image3.png": image6,
    "image4.png": image7,
    "image5.png": image8,
  };

  return (
    <div className={styles.third}>
      <div className={styles.texts}>
        <h2>Key Focus Area</h2>
        <p>
          OOI focuses on activities and initiatives in Technology, Education,
          Arts, Charitable Trusts and Health <span>(T.E.A.C.H.)</span> because
          we believe these interconnected areas are essential for building
          strong, vibrant communities, where everyone has the opportunity to
          thrive.
        </p>
      </div>

      <div className={styles.images}>
        {area.map((data, index) => (
          <div key={index} className={styles.image}>
            <img src={ImageMap[data.image]} alt='' />
            <div className={styles.text}>
              <h2>{data.title}</h2>
              <p>{data.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
