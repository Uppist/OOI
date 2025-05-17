/** @format */

import React from "react";
import styles from "./contribute.module.css";
import contribute from "../../../../assets/Programme/FFI/contribute.png";

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
      <p>
        The <span>key components of the FFI programme</span> will cover matters
        such as:
      </p>
    </div>
  );
}
