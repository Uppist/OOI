/** @format */

import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default function Sustainability() {
  return (
    <div className={styles.sustainability}>
      <div className={styles.text}>
        <h2>Sustainability</h2>
        <span>
          OOI is committed to ensuring the long-term sustainability and ethical
          management of all its programmes and campaigns. As donation levels
          grow for each initiative, we intend to transition the management of
          these funds into a{" "}
          <span className={styles.link}>
            <Link to='https://utltrustees.com/private-trust-services/'>
              Trusteeship
            </Link>{" "}
          </span>{" "}
          structure. This will enhance corporate governance, prioritise
          transparency and accountability, and ensure that OOI remains focused
          on the core missions of all its programmes while maintaining ethical
          operational management across the board.
        </span>
      </div>
      <div className={styles.text}>
        {" "}
        <h2>Partnerships</h2>
        <span>
          OOI will collaborate with a diverse range of partners to ensure the
          successful achievement of all programmes and their respective
          objectives. Some partners will provide support across all our
          programmes, while others will have programme-specific expertise.
        </span>
      </div>
      <div className={styles.text}>
        {" "}
        <h2>OOI Funding</h2>
        <span>
          We would like to let you know that OOI generates its own income from
          two sources: firstly, donations made directly to OOI and; secondly, a
          management fee of 2.5% (maximum) charged on all funds under
          management. These sources of funding are directly expended on all
          operational matters such as: human resources & personnel; office &
          administrative expenses; programmes operations & management;
          communications & marketing; governance & compliance; and other
          operational expenses.
        </span>
      </div>
    </div>
  );
}
