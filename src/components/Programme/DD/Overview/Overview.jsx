/** @format */

import React, { useEffect } from "react";
import styles from "./overview.module.css";
import overview from "../../../../assets/Programme/DD/image1.png";

export default function Overview() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={styles.overview}>
      <div className={styles.p}>
        <img src={overview} alt='' />

        <div className={styles.container}>
          <div className={styles.text}>
            {" "}
            <span>
              Overview <hr />
            </span>{" "}
          </div>
          <h2>Give Back, Give Hope: Join OOI's Donation Drive</h2>
          <div className={styles.div}>
            <p>
              October Orange Initiative (OOI) is excited to announce our
              Donation Drive, an initiative aimed at providing much-needed
              support to individuals and families in impoverished communities.
              We are calling on the generosity of our community to donate gently
              used clothes, shoes, toys, and books that will be redistributed to
              those in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
