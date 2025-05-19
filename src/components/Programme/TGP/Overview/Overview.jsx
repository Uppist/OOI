/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import image1 from "../../../../assets/Programme/TGP/image1.png";

export default function Overview() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={styles.overview}>
      <div className={styles.p}>
        <img src={image1} alt='' />

        <div className={styles.container}>
          <div className={styles.text}>
            {" "}
            <span>
              Overview <hr />
            </span>{" "}
          </div>
          <h2>The Gero Programme (TGP)</h2>
          <div className={styles.div}>
            <p>
              TGP is committed to providing comprehensive support for the
              elderly in Nigeria. Recognising the unique challenges and
              vulnerabilities faced by this demographic, TGP aims to create a
              robust framework of care that addresses their diverse needs. The
              programme focuses on two key areas: supporting existing care homes
              and promoting the development of assisted living facilities. By
              providing financial assistance, resources, and strategic
              partnerships, TGP seeks to improve the quality of life for elderly
              individuals, ensuring they receive the respect, dignity, and care
              they deserve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
