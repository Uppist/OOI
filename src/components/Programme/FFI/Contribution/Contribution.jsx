/** @format */

import React from "react";
import styles from "./contribute.module.css";
import contribute from "../../../../assets/Programme/FFI/contribute.png";
import contribut2 from "../../../../assets/Programme/FFI/contribute2.png";
import contribut3 from "../../../../assets/Programme/FFI/contribute3.png";

export default function Contribution() {
  return (
    <div className={styles.contribute}>
      <div>
        <h2>Contributions to resolving the problems</h2>
        <span>
          It is a joint responsibility to use our collective knowledge and
          experience to impact our communities and help others positively.
          Recognising the challenges faced by unemployed youth in Nigeria, we
          have decided to launch an upskilling programme, to reduce the number
          of unemployed graduates and eventually eliminate this issue.
        </span>
        <p>The goals and objectives of the FFI will focus on:</p>
      </div>

      <img src={contribute} alt='' />
      <div className={styles.image}>
        <img src={contribut2} alt='' />
        <img src={contribut3} alt='' />
      </div>
      <p>
        The <span>key components of the FFI programme</span> will cover matters
        such as:
      </p>
    </div>
  );
}
