/** @format */

import React from "react";
import styles from "./operation.module.css";
import operation from "../../../../assets/Programme/HIP/operation.png";
import check from "../../../../assets/Programme/HIP/check_circle.svg";

export default function Operations() {
  return (
    <div className={styles.operation}>
      <div>
        <label htmlFor=''>Operations</label>
        <span>
          How it works is that HIP operates through a carefully structured
          process:
        </span>
        <ul>
          <li>
            <img src={check} alt='' />
            Patient Identification: During outpatient clinic sessions,
            healthcare professionals at selected partner hospitals identify
            potential beneficiaries based on specific criteria, such as
            financial need, severity of condition, and commitment to treatment.
            In addition, potential beneficiaries will be identified from
            patients enrolled in a specific health plan designed for this
            programme with our partner HMO, who require financial support
            exceeding their existing HMO coverage.
          </li>
          <li>
            <img src={check} alt='' />
            Sponsorship Opportunities: Identified patients are presented as
            sponsorship opportunities to the HIP Fund (which would have sought
            support from potential donors, including individuals, corporations,
            and charitable organisations).
          </li>
          <li>
            <img src={check} alt='' />
            Transparent Allocation: All funds raised are transparently managed
            and allocated to cover eligible medical expenses for sponsored
            patients.
          </li>
          <li>
            <img src={check} alt='' />
            Impact Monitoring: Regular monitoring and evaluation ensure that
            funds are used effectively and that sponsored patients receive the
            necessary care and support.
          </li>
        </ul>
      </div>
      <img src={operation} alt='' />
    </div>
  );
}
