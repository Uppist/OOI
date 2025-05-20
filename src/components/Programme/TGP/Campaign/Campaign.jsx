/** @format */

import React from "react";
import styles from "./campaign.module.css";
import campaign from "../../../../assets/Programme/TGP/image7.png";
import { Link } from "react-router-dom";

export default function Campaign() {
  return (
    <div className={styles.campaign}>
      <div className={styles.container}>
        <img src={campaign} alt='' />

        <div>
          <span>The Campaign</span>
          <p>
            TGP has set an initial fundraising goal of ₦125,000,000
            (approximately $75,000 USD). These funds will be crucial for
            launching the TGP Fund, which will provide critical financial
            assistance to existing care homes and support the development of new
            assisted living facilities. The fund will directly support
            infrastructure improvements, medical supplies, and operational costs
            for care homes, as well as land acquisition, construction, and
            staffing for new facilities. Every donation, regardless of its size,
            plays a vital role in achieving this goal and ensuring that elderly
            individuals in Nigeria have access to quality care and support.
          </p>

          <button>
            <Link to='/donate-to-tgp'>Donate to TGP</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
