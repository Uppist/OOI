/** @format */

import React from "react";
import styles from "./campaign.module.css";
import campaign from "../../../../assets/Programme/OFF/campaign.png";
import { Link } from "react-router-dom";

export default function Campaign() {
  return (
    <div className={styles.campaign}>
      <div className={styles.image}>
        <img src={campaign} alt='' />

        <div className={styles.text}>
          <h2>The Campaign</h2>

          <div>
            <p>
              OFF has set an ambitious goal to raise N250,000,000 (approximately
              USD150,000 equivalent]) in 2025 to provide educational
              scholarships to out-of-school children from impoverished
              communities across Nigeria. Our aim is to begin providing these
              scholarships as soon as possible. If we reach our fundraising
              target before September 2025, we will commence the programme this
              year. Otherwise, we will aim to start sponsoring children in 2026.
            </p>
            <p>
              This funding will provide crucial support, enabling children to
              access quality education and break the cycle of poverty. We
              believe that investing in their education is an investment in a
              brighter future for Nigeria.
            </p>
            <p>
              Other key matters will cover: Sustainable Support (We would not
              spend all the funds at once. A portion will be invested with a
              professional advisor to ensure we can continue supporting our
              sponsored children through- out their education); and Expanding
              our Reach (Every Naira raised above our initial target will allow
              us to sponsor even more children each year, creating a lasting
              impact on the lives of young people in Nigeria).
            </p>
          </div>
        </div>
      </div>
      <div className={styles.p}>
        <p>
          By combining immediate action with long-term financial planning, OFF
          aims to make a significant contribution to reducing the number of
          out-of-school children, not just this year, but for many years to
          come. We believe that investing in education is investing in the
          future of Nigeria.
        </p>
        <button>
          <Link to='/donate-to-off'>Donate to OFF</Link>
        </button>
      </div>
    </div>
  );
}
