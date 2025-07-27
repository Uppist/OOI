/** @format */

import React from "react";
import image10 from "../../../assets/Aboutus/image10.png";
import styles from "./style.module.css";

export default function Sustainability() {
  return (
    <div className={styles.sustainability}>
      <div className={styles.container}>
        <img src={image10} alt='' />
        <div className={styles.text}>
          <h2>Sustainability and Long-Term Vision</h2>
          <div className={styles.p}>
            <p>
              We are dedicated to fostering positive impact through sustainable
              funding, strong partnerships, focused key areas and effective
              management. OOI integrates strategic planning, financial
              management, programme design, partnership building and monitoring
              & evaluation into its operations to nurture sustainability for the
              future. By embedding these principles, we aim to create lasting
              legacies embodying positive changes and social impact with
              initiatives designed for generations to come.
            </p>

            <p>
              We hope to always stand as a beacon of hope, always encouraging
              impactful and wide-reaching change that creates more equitable and
              just communities. Through strategic investments in our key focus
              areas, T.E.A.C.H., OOI is dedicated to empowering individuals and
              strengthening communities.
            </p>

            <p>
              With a strong governance structure, commitment to transparency and
              a focus on sustainable practices, OOI is set to make significant
              contributions to the betterment of societies. By fostering
              collaboration, embracing innovation and remaining responsive to
              the evolving needs of the communities, OOI envisions a future
              where every individual has opportunities to thrive and reach their
              full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
