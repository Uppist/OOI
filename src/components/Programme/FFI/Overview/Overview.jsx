/** @format */

import React, { useEffect } from "react";
import styles from "./overview.module.css";
import overview from "../../../../assets/Programme/FFI/overview.png";

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
          <span>
            Overview <hr />
          </span>{" "}
        </div>
        <h2>Future Forward Initiative (FFI)</h2>
        <p>
          The Future Forward Initiative (FFI) is a comprehensive empowerment
          programme designed to equip out-of-job youths with the essential
          skills and knowledge necessary to thrive in today's competitive job
          market. Recognising the challenges faced by young people in securing
          sustainable employment, FFI is committed to providing practical
          training, mentorship, and networking opportunities to help them
          achieve their career aspirations.
        </p>
      </div>
    </div>
  );
}
