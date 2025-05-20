/** @format */

import React from "react";
import styles from "./campaign.module.css";
import campaign from "../../../../assets/Programme/FFI/campaign.png";
import { Link } from "react-router-dom";

export default function Campaign() {
  return (
    <div className={styles.campaign}>
      <div className={styles.container}>
        <img src={campaign} alt='' />

        <div>
          <span>The Campaign</span>
          <p>
            Nigeria is currently facing a significant and pressing challenge:
            the issue of widespread graduate unemployment. This crisis not only
            affects the individuals struggling to find work but also impacts the
            overall economic health and social stability of the nation. The
            Future Forward Initiative (FFI) is a direct and strategic response
            to this challenge. This initiative supports the provision of
            critical training, mentorship, and job placement support for
            unemployed Nigerian graduates
          </p>
          <p>
            To achieve our ambitious goals of reducing the number of out of work
            graduates, we are targeting a fundraise of N250,000,000.00
            (approximately $150,000 USD. This funding will potentially cater to
            2-3 cohorts, however, with more funding we will increase the number
            of cohorts and run them concurrently. The funding will go towards
            comprehensive skills development, personalised career guidance,
            mentorship programmes, job placement assistance and entrepreneurship
            support.
          </p>
          <p>
            By investing in these key areas, FFI aims to empower Nigerian
            graduates, boost their employability, and contribute to a more
            robust economy. We believe that every graduate deserves the
            opportunity to build a successful career and contribute to the
            nation's progress.
          </p>
          <button>
            <Link to='/donate-to-ffi'>Donate to FFI</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
