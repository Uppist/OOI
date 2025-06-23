/** @format */

import React from "react";
import styles from "./style.module.css";
import area from "./Areas.json";
import area1 from "../../../../assets/Programme/OFF/Areas/area.png";
import area2 from "../../../../assets/Programme/OFF/Areas/area2.png";
import area3 from "../../../../assets/Programme/OFF/Areas/area3.png";
import area4 from "../../../../assets/Programme/OFF/Areas/area4.png";

export default function Areas() {
  const Image = {
    "area1.png": area1,
    "area2.png": area2,
    "area3.png": area3,
    "area4.png": area4,
  };
  return (
    <div className={styles.area}>
      <div className={styles.core}>
        <h2>Core Focus Area</h2>
        <span>
          The critical pillars for the OFF programme (i.e. Children, Teachers,
          Learning Centres and Advocacy) are discussed below.
        </span>
      </div>
      <div className={styles.container}>
        {area.map((data, index) => (
          <div className={styles.p} key={index}>
            <img src={Image[data.img]} alt='' />
            <div>
              <span>{data.span}</span>
              <p dangerouslySetInnerHTML={{ __html: data.p }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
