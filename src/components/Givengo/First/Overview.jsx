/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import image1 from "../../../assets/Givengo/image1.png";

export default function Overview() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={styles.overview}>
      <div className={styles.content}>
        <div className={styles.text}>
          <label htmlFor=''>
            Overview <hr />
          </label>
          <div className={styles.textContent}>
            <h2>Givengo</h2>
            <p>
              Givengo represents OOI’s strategic approach to centralising all
              fundraising efforts onto a single, unified platform. This platform
              is designed to optimise our ability to pursue and secure donations
              across all OOI-managed programmes effectively. By consolidating
              fundraising activities, Givengo ensures efficiency, transparency,
              and a streamlined experience for both donors and OOI. Furthermore,
              Givengo embodies a fundamental philosophy of OOI: all donations
              received are not simply spent, but strategically managed and
              invested. This investment strategy aims to ensure the long-term
              financial sustainability of our programmes, allowing us to achieve
              our goals and maximise our impact over time.
            </p>
            <p>
              In essence, Givengo is both a platform and a principle, reflecting
              our commitment to responsible and impactful philanthropy. Our
              future vision for Givengo is to develop it into a fully
              independent and robust fundraising platform, capable of supporting
              and expanding our charitable activities even further.
            </p>
          </div>
        </div>
        <img src={image1} alt='' />
      </div>
      {/* <div></div> */}
      <div className={styles.p}>
        <p>
          Our centralised approach to managing campaigns reflects OOI's
          commitment to transparency, accountability, and governance. This
          ensures that we effectively achieve our goals and meet the aspirations
          of our donor community.
        </p>
        <p>
          Your generosity can directly translate into hope and tangible support
          for those in need. By contributing to our ongoing campaigns (as
          highlighted below), you are entrusting us with the resources to make a
          real difference in the lives of individuals and communities. Every
          donation empowers us to provide critical services, fund vital
          programmes, and create lasting positive change. Join us in this
          mission, and together, we can build a brighter future for all.
        </p>
      </div>
    </div>
  );
}
