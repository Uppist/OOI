/** @format */

import React from "react";
import styles from "./donate.module.css";
import image2 from "../../../../assets/Programme/TGT/image.png";
import check from "../../../../assets/Programme/TGT/check_circle.svg";
export default function Donate() {
  return (
    <div className={styles.donate}>
      <div className={styles.container}>
        <h2>Why Donate on The Giving Trybe?</h2>
        <ul>
          <li>
            <img src={check} alt='' />
            <span> Convenience:</span> Donors can easily browse through a list
            of verified nonprofit organisations and donate with just a few
            clicks.
          </li>
          <li>
            <img src={check} alt='' />
            <span> Security:</span> All donations made on our platform are
            processed securely and transferred directly to the nonprofit
            organisations they are intended for.
          </li>
          <li>
            <img src={check} alt='' />
            <span> Transparency:</span> We provide donors with regular updates
            on how their donations are being used.
          </li>
          <li>
            <img src={check} alt='' />
            <span> Impact:</span> We are committed to supporting the incredible
            work that Nigerian nonprofit organisations are doing to make a
            difference in the lives of many people.
          </li>
        </ul>
      </div>
      <img src={image2} alt='' />
    </div>
  );
}
