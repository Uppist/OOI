/** @format */

import React from "react";
import styles from "./operation.module.css";
import operation from "../../../../assets/Programme/OFF/operation.png";
import check from "../../../../assets/Programme/OFF/check_circle.svg";

export default function Operations() {
  return (
    <div className={styles.operation}>
      <div className={styles.image}>
        <div className={styles.text}>
          <h2>Operations</h2>
          <span>
            OFF is committed to maintaining a high-quality programme and
            ensuring the integrity of the fund. Here is how we will manage
            operations:
          </span>
          <p>Beneficiary Management:</p>
          <ul>
            <li>
              {" "}
              <img src={check} alt='' />
              {"  "}
              <span>Rigorous Selection:</span> Potential beneficiaries will
              undergo a thorough onboarding assessment to ensure alignment with
              programme goals. Children are admitted into the programme annually
              based on this objective assessment.
            </li>
            <li>
              {" "}
              <img src={check} alt='' /> {"  "}
              <span>Quality Education:</span> We will prioritise private/public
              schools that meet our quality and budget criteria to ensure
              students receive a strong educational foundation.
            </li>
          </ul>
        </div>
        <img src={operation} alt='' />
      </div>
      <div className={styles.ul}>
        <ul>
          <li>
            {" "}
            <img src={check} alt='' /> {"  "}
            <span>Performance Tracking:</span> We will track academic
            performance and other relevant metrics, recognising and showcasing
            high-achieving students.
          </li>
          <li>
            {" "}
            <img src={check} alt='' /> {"  "}
            <span>Enrichment Activities:</span> We will organise participation
            in educational competitions to foster growth and development.
          </li>
        </ul>

        <span>Operational Excellence:</span>

        <ul>
          <li>
            {" "}
            <img src={check} alt='' /> {"  "}
            <span>Teacher Development:</span> We will identify and support
            teachers in community-based schools through programmes designed to
            enhance teaching quality.
          </li>
          <li>
            {" "}
            <img src={check} alt='' /> {"  "}
            <span>Performance Standards:</span> Students must maintain a 75%
            average grade annually to remain in the programme.
          </li>
          <li>
            {" "}
            <img src={check} alt='' /> {"  "}
            <span>Comprehensive Support:</span> The programme will cater to
            students at all levels, from primary to university, with potential
            scholarships for postgraduate degrees based on performance.
          </li>
          <li>
            {" "}
            <img src={check} alt='' /> {"  "}
            <span>Quality Education:</span> We will prioritise private/public
            schools that meet our quality and budget criteria to ensure students
            receive a strong educational foundation.
          </li>
          <li>
            {" "}
            <img src={check} alt='' /> {"  "}
            <span>Building a Pipeline:</span> To ensure a consistent stream of
            potential beneficiaries, we will leverage partner agencies and
            establish direct connections with communities. This multifaceted
            approach will allow us to reach more children in need.
          </li>
        </ul>
      </div>
    </div>
  );
}
