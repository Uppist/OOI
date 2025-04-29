/** @format */

import React from "react";
import styles from "./style.module.css";
import image3 from "../../../assets/Givengo/image3.png";
import check from "../../../assets/check_circle.svg";

export default function Funds() {
  return (
    <div className={styles.funds}>
      <div className={styles.text}>
        <h2>Funds Management And Growth</h2>
        <p>
          OOI is committed to transparency and accountability. To achieve this,
          we will establish clear operational structures built on two key
          pillars:
        </p>
        <ul>
          <li>
            <img src={check} alt='' /> <span>Dual Management</span> (OOI will
            manage operations and fundraising, while an independent trustee/fund
            manager oversees investments and fund disbursement. This ensures
            checks and balances and fosters trust with donors); and
          </li>
          <li>
            <img src={check} alt='' /> <span>Future Transition</span> to Full
            Trustee Status (As the funds for each programme grow, they will be
            transitioned into a full Trust, under the management of a trustee,
            further strengthening corporate governance and long-term
            sustainability).
          </li>
        </ul>
      </div>
      <img src={image3} alt='' />
    </div>
  );
}
