/** @format */

import React from "react";
import styles from "../Newsroom/newsroom.module.css";

export default function Reports() {
  return (
    <div className={styles.newsroom}>
      <h2>Featured Reports</h2>
      <div className={styles.p}>
        <p>
          {" "}
          Transparency and accountability are at the heart of October Orange
          Initiative. Our Featured Reports section provides in-depth insights
          into our work, showcasing our impact, financial stewardship, and
          progress towards our goals.
        </p>
        <p>Here, you will find a range of reports, including</p>
        <ul>
          <li>
            <span>Annual Impact Reports:</span> Discover the tangible outcomes
            of our programmes and initiatives.
          </li>
          <li>
            <span>Fundraising Reports:</span> Gain a clear understanding of our
            funding sources and how we utilise resources.
          </li>
          <li>
            <span>Programme Reports: </span>Explore detailed reports on specific
            programmes, highlighting their activities, achievements, and
            challenges.
          </li>
          <li>
            <span>Research Reports: </span>Delve into research findings that
            inform our strategies and interventions.
          </li>
        </ul>
      </div>{" "}
      <div>
        <img src='' alt='' />
      </div>
    </div>
  );
}
