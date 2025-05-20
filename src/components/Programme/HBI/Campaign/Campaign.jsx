/** @format */

import React from "react";
import styles from "./campaign.module.css";
import campaign from "../../../../assets/Programme/HBI/image6.png";
import check from "../../../../assets/Programme/HBI/check_circle.svg";
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
              <img src={check} alt='' />
              Support existing mental health programmes and organisations.
            </li>
            <li>
              <img src={check} alt='' />
              Develop and implement new community-based mental health
              programmes.
            </li>
            <li>
              <img src={check} alt='' />
              Conduct public awareness campaigns to reduce stigma and promote
              help-seeking.
            </li>
            <li>
              <img src={check} alt='' />
              Provide training and resources to community members and
              organisations.
            </li>
            <li>
              {" "}
              <img src={check} alt='' />
              Support research and innovation in mental health.
            </li>
          </ul>
          <p>
            Every donation, regardless of its size, plays a vital role in
            achieving this goal and ensuring that individuals and communities in
            Nigeria have access to the mental health care they need.
          </p>
          <button>
            <Link to='/donate-to-hbi'>Donate to HBI</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
