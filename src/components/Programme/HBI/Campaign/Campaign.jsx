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
            HBI has set an initial fundraising goal of ₦125,000,000
            (approximately $75,000 USD). These funds will be crucial for
            launching and sustaining our mental health initiatives. The funds
            will be used to:
          </p>
          <ul>
            <li>
              Support existing mental health programmes and organisations.
            </li>
            <li>
              Develop and implement new community-based mental health
              programmes.
            </li>
            <li>
              Conduct public awareness campaigns to reduce stigma and promote
              help-seeking.
            </li>
            <li>
              Provide training and resources to community members and
              organisations.
            </li>
            <li>Support research and innovation in mental health.</li>
          </ul>
          <p>
            Every donation, regardless of its size, plays a vital role in
            achieving this goal and ensuring that individuals and communities in
            Nigeria have access to the mental health care they need.
          </p>
          <button>
            <Link to='/donate-to-hip'>Donate to HBI</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
