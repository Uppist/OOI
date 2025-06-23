/** @format */

import React, { useEffect } from "react";
import styles from "../Newsroom/newsroom.module.css";
import image from "../../../assets/report.png";
import arrow from "../../../assets/arrow-up.svg";

export default function Reports() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  function handleOpen() {
    window.open(
      "https://drive.google.com/file/d/1EptQh6hzQglPD2Wl3kBRU3n_Yk5aZcYa/view"
    );
  }
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
      <div className={styles.report}>
        <img src={image} alt='' />
        <label htmlFor=''>Annual Impact Reports</label>
        <div>
          <span>25 February 2025</span>
          <div className={styles.h3}>
            <h3>OOI Impact Report (2015-2024)</h3>
            <img src={arrow} alt='' onClick={handleOpen} />
          </div>
          <p>
            OOI’s inaugural Impact Report, covering the period from 2015 to
            2024. This report reflects our commitment to transparency and
            accountability, showcasing the journey...
          </p>
        </div>
      </div>
    </div>
  );
}
