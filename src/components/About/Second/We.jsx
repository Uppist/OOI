/** @format */

import React from "react";
import styles from "./style.module.css";
import image2 from "../../../assets/Aboutus/image2.png";

export default function We() {
  return (
    <div className={styles.container}>
      <img src={image2} alt='' />

      <div className={styles.textwe}>
        <label htmlFor=''>
          Who We Are <hr />
        </label>
        <h2>Our Initiatives, A Connected World</h2>
        <p>
          The October Orange Initiative (OOI) is committed to catalysing
          positive change and delivering tangible results that uplift
          individuals and communities. Through the power of collaboration and
          driven by compassion, we unite generous donors to strategically invest
          in impactful initiatives. These initiatives are meticulously designed
          to address critical needs, champion social justice, and create lasting
          legacies of hope and opportunity. We are unwavering in our commitment
          to transparency, accountability, and measurable outcomes, ensuring
          that every contribution is utilised effectively and makes a profound
          difference in the lives of those we serve.
        </p>
      </div>
    </div>
  );
}
