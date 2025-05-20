/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import image2 from "../../../../assets/Programme/HBI/image2.png";

export default function Problem() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={styles.problem}>
      <div className={styles.p2}>
        <div className={styles.container2}>
          <h2>Problem Statement</h2>
          <div className={styles.div}>
            <p>
              Nigeria faces significant mental health challenges, including a
              lack of access to quality care, stigma surrounding mental illness,
              and insufficient resources for support and treatment. Many
              individuals in need of mental health services cannot access them
              due to financial constraints, geographical barriers, or a lack of
              awareness. This leads to untreated mental health conditions, which
              can have severe consequences for individuals, families, and
              communities. HBI aims to address these challenges by increasing
              access to care, raising awareness, and providing resources for
              research and community support.
            </p>
          </div>
        </div>
        <img src={image2} alt='' />
      </div>
    </div>
  );
}
