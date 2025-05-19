/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import image2 from "../../../../assets/Programme/TGP/image2.png";

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
              Nigeria's elderly population often faces significant challenges,
              including limited access to quality healthcare, inadequate living
              conditions, and social isolation. Many existing care homes lack
              the resources to provide comprehensive care, and there is a
              shortage of facilities dedicated to assisted living and
              end-of-life care. This situation leaves many elderly individuals
              vulnerable and without the support they need. TGP aims to address
              these challenges by providing financial assistance, resources, and
              support to existing care homes and promoting the development of
              new facilities.
            </p>
          </div>
        </div>
        <img src={image2} alt='' />
      </div>
    </div>
  );
}
