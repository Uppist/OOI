/** @format */

import React from "react";
import styles from "./style.module.css";
import image3 from "../../../assets/Aboutus/image3.png";

export default function Philosophies() {
  return (
    <div className={styles.philosophies}>
      <div className={styles.textphil}>
        <div className={styles.text}>
          <h2>
            Our <span>Philosophies</span>
          </h2>
          <div className={styles.missionContainer}>
            <div className={styles.mission}>
              <span>Mission</span>
              <p>We use the art of giving to make our world better.</p>
            </div>
            <div className={styles.mission}>
              {" "}
              <span>Vision</span>
              <p>
                To implement initiatives that keep us actively involved in
                causes that uplift the lives of everyday people.
              </p>
            </div>
            <div className={styles.mission}>
              {" "}
              <span>Values</span>
              <p>
                Our dream of making significant contributions to our focus areas
                presents us with daunting challenges. What makes us relentless
                in our quest to achieve our goals is <span>Courage</span>. We
                are daring in our thoughts and even bolder in our approach to
                executing our initiatives in view of the greater good. Courage
                for us is continually engaging the entrepreneurial spirit that
                fuels our passion to go beyond the conventional.
              </p>
            </div>
          </div>
        </div>
        <img src={image3} alt='' />
      </div>

      <p className={styles.p}>
        We strive to attain the highest levels of <span>Integrity</span> in
        everything that we do. Our character, at the level of individuals and as
        an organisation, is defined by accountability, fairness and grounded
        principles.
      </p>
      <p className={styles.pText}>
        We take <span>Responsibility</span> for all that we do and their
        implications on our environment, as what we seek to do is continually
        support positive change.
      </p>
      <p className={styles.pText}>
        The quest for <span>Excellence</span> is at the core of what we do, how
        we do things and the continuous support we provide to our stakeholders.
        This helps ensure that all we do goes through a process leading towards
        building a lasting institution.
      </p>
    </div>
  );
}
