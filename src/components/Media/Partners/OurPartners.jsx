/** @format */

import React from "react";
import styles from "./style.module.css";
import partner from "./ourpartner.json";
import logo1 from "../../../assets/Partners/logo1.svg";
import logo2 from "../../../assets/Partners/logo2.svg";
import logo3 from "../../../assets/Partners/logo3.svg";
import logo4 from "../../../assets/Partners/logo4.svg";
import logo5 from "../../../assets/Partners/logo5.svg";
import logo6 from "../../../assets/Partners/logo6.svg";

export default function OurPartners() {
  const Logo = {
    "logo1.svg": logo1,
    "logo2.svg": logo2,
    "logo3.svg": logo3,
    "logo4.svg": logo4,
    "logo5.svg": logo5,
    "logo6.svg": logo6,
  };

  function handleClick(url) {
    window.open(url, "_blank", "noopener, noreferrer");
  }
  return (
    <div className={styles.partners}>
      <h2>Our Partners</h2>
      <div className={styles.container}>
        {partner.map((data, index) => (
          <div className={styles.container2} key={index}>
            <img src={Logo[data.logo]} alt='' />
            <hr />
            <span>
              {data.text}{" "}
              <label htmlFor='' onClick={() => handleClick(data.link)}>
                Visit {data.name}
              </label>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
