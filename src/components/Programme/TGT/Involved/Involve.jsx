/** @format */

import React from "react";
import styles from "./involve.module.css";
import involve from "./involve.json";
import image3 from "../../../../assets/Programme/TGT/image3.png";
import image4 from "../../../../assets/Programme/TGT/image4.png";
import image5 from "../../../../assets/Programme/TGT/image5.png";
import back from "../../../../assets/Programme/TGT/back.svg";
import { Link } from "react-router-dom";

export default function Involve() {
  const Image = {
    "image1.png": image3,
    "image2.png": image4,
    "image3.png": image5,
  };
  return (
    <div className={styles.involve}>
      <div className={styles.container}>
        <h2>Get Involved</h2>
        <p>
          At TGT, we believe that everyone can make a difference, no matter how
          small. That is why we are inviting you to get involved with our
          mission to support Nigerian nonprofit organisations.
        </p>
        <p>Here are some specific examples of how you can get involved:</p>
        <div className={styles.container2}>
          {involve.map((data, index) => (
            <div key={index} className={styles.text}>
              <img src={Image[data.img]} alt='' />
              <div>
                <p>
                  {data.span}
                  <span>{data.text}</span>
                </p>
              </div>
              <button>
                <Link to={data.link}>{data.button}</Link>
              </button>
            </div>
          ))}
        </div>
        <p>
          No matter how you choose to get involved, your support will make a
          difference. Together, we can make a positive impact on the lives of
          many people. Thank you for your support!
        </p>
      </div>
      <button>
        <img src={back} alt='' />
        Back
      </button>
    </div>
  );
}
