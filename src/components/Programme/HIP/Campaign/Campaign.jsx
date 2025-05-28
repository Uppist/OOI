/** @format */

import React from "react";
import styles from "./style.module.css";
import campaign from "../../../../assets/Programme/HIP/campaign.png";
import logo1 from "../../../../assets/Programme/HIP/back.svg";
import { Link } from "react-router-dom";

export default function Campaign() {
  return (
    <div className={styles.campaign}>
      <div className={styles.container}>
        <div>
          <span>The Campaign</span>
          <p>
            HIP has set an initial fundraising goal of Two Hundred and Fifty
            Million Naira (₦250,000,000) (approximately $150,000.00). This sum
            is crucial for launching the HIP Fund, which will provide critical
            financial assistance to individuals facing barriers to healthcare.
            The fund will directly support medical procedures, the purchase of
            essential medications, and necessary consultations. Every donation,
            regardless of its size, plays a vital role in achieving this goal
            and ensuring that everyone has access to quality healthcare. By
            working together and contributing to the HIP Fund, we can
            collectively bridge the healthcare gap and build healthier
            communities for all. To support this important campaign and
            contribute to a healthier future for many, please click on the
            'Donate to HIP' button.
          </p>
          <button>
            <Link to='/donate-to-hip'>Donate to HIP</Link>
          </button>
          <p>
            If you would like to gift the HIP with a sizable donation, kindly
            reach out to us via email <span>hip@octoberorange.org</span>
          </p>
        </div>
        <img src={campaign} alt='' />
      </div>

      <button>
        <Link to='/programme'>
          {" "}
          <img src={logo1} alt='' />
          Back
        </Link>
      </button>
    </div>
  );
}
