/** @format */

import React from "react";
import styles from "./mission.module.css";
import mission from "../../../../assets/Programme/HIP/mission.png";
import check from "../../../../assets/Programme/HIP/check_circle.svg";

export default function Mission() {
  return (
    <div className={styles.mission}>
      <div className={styles.missionImage}>
        <div className={styles.missionText}>
          <label htmlFor=''>Mission</label>
          <span>
            This programme is to ensure equitable access to quality healthcare
            for all, while offering hope and support to individuals struggling
            to afford necessary medical treatment, helping them on their path to
            recovery. Through the generosity of compassionate donors, we aim to:
          </span>
          <ul>
            <li>
              <img src={check} alt='' />
              Provide financial assistance for critical medical procedures,
              medications, and consultations.
            </li>
            <li>
              <img src={check} alt='' />
              Offer hope and dignity to patients struggling to afford their
              essential healthcare needs.
            </li>
            <li>
              <img src={check} alt='' />
              Empower individuals to take control of their health and
              well-being.
            </li>
          </ul>
        </div>
        <img src={mission} alt='' />
      </div>
      <div className={styles.missionText2}>
        <span>
          Your donations will establish and help sustain a dedicated fund, i.e.,
          the HIP Fund, with the primary aim of ensuring that many people are
          helped to access essential medical care. This dedicated fund will
          serve as a central hub for all financial aspects of the programme,
          guaranteeing seamless management and efficient resource allocation as
          is necessary.
        </span>

        <span>The HIP Fund is a strategic and sustainable tool to:</span>
        <ul>
          <li>
            <img src={check} alt='' />
            Collect and manage donations: The fund will actively solicit and
            receive donations from individuals, corporations, and charitable
            organisations. It will establish transparent systems for tracking
            and recording all contributions.
          </li>
          <li>
            <img src={check} alt='' />
            Coordinate the disbursement of funds: The fund will work closely
            with healthcare providers and beneficiaries to determine the
            appropriate allocation of funds. This will involve carefully
            assessing individual needs, prioritising critical cases, and
            ensuring that funds are used effectively to maximise impact.
          </li>
        </ul>
        <span>
          By centralising financial management and streamlining the process of
          allocating resources, the HIP Fund will enable the programme to
          provide timely and comprehensive support to those in need.
        </span>
      </div>
    </div>
  );
}
