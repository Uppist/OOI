/** @format */

import React from "react";
import styles from "../Newsroom/newsroom.module.css";

export default function Gallery() {
  return (
    <div className={styles.newsroom}>
      <h2>Gallery</h2>
      <div className={styles.p}>
        <p>Experience Impact - Explore our gallery </p>
        <p>
          Our gallery showcases the heart and soul of OOI by exploring the faces
          of the communities we serve, witnessing the impact of our initiatives
          firsthand and experiencing the energy and passion that drives our
          work.
        </p>
      </div>{" "}
      <div>
        <img src='' alt='' />
      </div>
    </div>
  );
}
