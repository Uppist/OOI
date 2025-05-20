/** @format */

import React from "react";
import styles from "./donate.module.css";
import image2 from "../../../../assets/Programme/DD/image2.png";
import check from "../../../../assets/Programme/DD/check_circle.svg";
export default function Donate() {
  return (
    <div className={styles.donate}>
      <div className={styles.container}>
        <h2>Why Donate?</h2>
        <p>
          Your donations can make a real difference in the lives of others. By
          giving items you no longer need, you can:
        </p>
        <ul>
          <li>
            <img src={check} alt='' />
            <span> Provide essential resources:</span> Many families struggle to
            afford basic necessities like clothing and shoes. Your donations can
            help them meet these needs and improve their quality of life.
          </li>
          <li>
            <img src={check} alt='' />
            <span> Support children's development:</span> Donating toys and
            books can provide children with opportunities for play, learning,
            and development, fostering their imagination and creativity.
          </li>
          <li>
            <img src={check} alt='' />
            <span>Promote sustainability:</span> Donating items extends their
            lifespan and reduces waste, contributing to a more sustainable
            environment.
          </li>
          <li>
            <img src={check} alt='' />
            <span> Spread kindness and hope:</span> Your generosity can bring
            joy and hope to individuals and families facing challenging
            circumstances.
          </li>
        </ul>
      </div>
      <img src={image2} alt='' />
    </div>
  );
}
