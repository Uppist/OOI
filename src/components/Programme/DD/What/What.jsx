/** @format */

import React from "react";
import styles from "./what.module.css";
import image2 from "../../../../assets/Programme/DD/image3.png";
import check from "../../../../assets/Programme/DD/check_circle.svg";
export default function What() {
  return (
    <div className={styles.donate}>
      <div className={styles.container}>
        <h2>What We Are Accepting</h2>

        <ul>
          <li>
            <img src={check} alt='' />
            <span> Gently used clothing:</span> Clothes for all ages and
            genders, including shirts, pants, dresses, jackets, and sweaters.
          </li>
          <li>
            <img src={check} alt='' />
            <span> Shoes: </span>Shoes in good condition for all ages.{" "}
          </li>
          <li>
            <img src={check} alt='' />
            <span> Toys: </span>Toys in good working order, suitable for various
            age groups.{" "}
          </li>
          <li>
            <img src={check} alt='' />
            <span> Books:</span> Books for children and adults, including
            fiction, non-fiction, and educational materials.
          </li>
        </ul>
      </div>
      <img src={image2} alt='' />
    </div>
  );
}
