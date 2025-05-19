/** @format */

import React, { useEffect } from "react";
import styles from "./overview.module.css";
import overview from "../../../../assets/Programme/HIP/overview.png";

export default function Overview() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={styles.overview}>
      <img src={overview} alt='' />
      <div className={styles.container}>
        <div className={styles.text}>
          {" "}
          <span>Overview</span>
          <hr />{" "}
        </div>
        <h2>Health Impact Programme (HIP)</h2>
        <p>
          In the face of <span>rising healthcare costs</span>, many individuals
          find themselves unable to access the medical care they desperately
          need. The Health Impact Programme (HIP), a collaborative initiative
          between OOI and selected healthcare providers, is designed to bridge
          this gap and provide a lifeline for those facing financial hardship to
          access quality healthcare.{" "}
        </p>
      </div>
    </div>
  );
}
