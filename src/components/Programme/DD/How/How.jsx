/** @format */

import React from "react";
import logo1 from "../../../../assets/Utilityicon.svg";

import styles from "./how.module.css";
import image2 from "../../../../assets/Programme/DD/image4.png";
import check from "../../../../assets/Programme/DD/check_circle.svg";
import { Link } from "react-router-dom";

export default function How() {
  return (
    <div className={styles.how2}>
      <div className={styles.how}>
        <img src={image2} alt='' />

        <div className={styles.container}>
          <h2>How to Donate</h2>
          <p>
            Kindly click on the Contact button below and from the drop down list
            select “Donation Drive” and the inquiry box do provide details of
            the items you would like to donate.
          </p>{" "}
          <div>
            <h2>Donation Guideline (Inquiry Box)</h2>
            <ul>
              <li>
                {" "}
                <img src={check} alt='' />
                Provide a list of the items you wish to donate.
              </li>
              <li>
                {" "}
                <img src={check} alt='' />
                Provide any specific guidelines on the condition of items
                accepted (e.g., clean, in good repair).
              </li>
              <li>
                {" "}
                <img src={check} alt='' />
                Indicate whether you would like to drop-off or have the items
                picked up from your location.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button>
        <Link to='/programmes'>
          {" "}
          <img src={logo1} alt='' />
          Back
        </Link>
      </button>
    </div>
  );
}
