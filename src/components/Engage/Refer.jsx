/** @format */

import React from "react";
import styles from "./style.module.css";
import image1 from "../../assets/Engage/refer1.png";
import image2 from "../../assets/Engage/refer2.png";
import image11 from "../../assets/Aboutus/image11.png";

export default function Refer() {
  return (
    <>
      <div className={styles.refer}>
        <div className={styles.nonprofit}>
          {/*First Section */}
          <div className={styles.header}>
            <h2>Refer a Nonprofit</h2>
            <span>
              Know an amazing nonprofit making a difference? Tell us about them!
            </span>
            <div>
              <p>
                At October Orange Initiative, we believe in the power of
                collaboration to create positive change.
              </p>
              <p>
                We are always seeking to connect with organisations that share
                our passion for empowering individuals and building stronger
                communities.
              </p>
              <p>
                {" "}
                If you know a nonprofit organisation doing incredible work in
                areas like education, healthcare, poverty alleviation, or any
                other field that aligns with our values, we want to hear about
                them!
              </p>
              <p>
                Your referrals help us expand our network and discover new
                opportunities to collaborate and support impactful initiatives.
              </p>
            </div>
          </div>
          <img src={image1} alt='' />
        </div>

        {/*Second Section */}
        <div className={styles.works}>
          <img src={image2} alt='' />

          <div>
            <h2>How it Works</h2>
            <span>
              Simply fill out the short form in the link below and tell us about
              the nonprofit you would like to refer. We will carefully review
              your submission and consider how we might be able to partner with
              or support their valuable work.
            </span>
          </div>
        </div>
      </div>

      {/*Third Section */}

      <div className={styles.fifth}>
        <div className={styles.button}>
          <span>
            Together we can make <label>greater impact</label>
          </span>
          <button>Refer a Nonprofit</button>
        </div>

        <img src={image11} alt='' />
      </div>
    </>
  );
}
