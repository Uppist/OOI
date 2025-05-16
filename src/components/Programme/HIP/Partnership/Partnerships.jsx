/** @format */

import React from "react";

import styles from "./partner.module.css";
import partner from "../../../../assets/Programme/HIP/partnership.png";
import check from "../../../../assets/Programme/HIP/check.png";
import data from "./partner.json";

export default function Partnerships() {
  return (
    <div className={styles.partner}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={partner} alt='' />
          <div className={styles.text}>
            <label htmlFor=''>Partnerships</label>
            <div>
              <span>
                Our Partnership approach is committed to creating a lasting,
                positive impact on the health of individuals and communities. We
                recognise that achieving this ambitious goal requires
                collaboration and a strong network of partners. Therefore, we
                are dedicated to building strategic alliances with key
                organisations within and outside the healthcare value chain to
                maximise our reach and effectiveness.
              </span>
              <span>
                We envision a collaborative ecosystem where partners work
                together to achieve shared goals, leveraging their unique
                expertise and resources to create a synergistic impact. Here is
                how we plan to engage with potential partners:
              </span>
            </div>
          </div>
        </div>
        <div className={styles.grid}>
          {data.map((text, index) => (
            <div className={styles.div} key={index}>
              <div>
                <img src={check} alt='' />
                <label htmlFor=''>{text.title}</label>
              </div>
              <p>{text.text}</p>
            </div>
          ))}
        </div>
      </div>
      <span>
        OOI recognises that achieving significant and sustainable improvements
        in community health requires a collaborative approach. By building a
        robust network of partners for the Health Impact Programme, we aim to
        leverage diverse expertise, expand our reach, and maximise our impact.
        These partnerships will be essential in securing resources, ensuring
        programme effectiveness, fostering community trust, and ultimately,
        creating healthier communities for all
      </span>
    </div>
  );
}
