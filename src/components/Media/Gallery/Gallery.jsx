/** @format */

import React, { useEffect } from "react";
import styles from "../Newsroom/newsroom.module.css";
import gallery from "../../../assets/Media/gallery.png";
import { Carousel } from "react-responsive-carousel";

export default function Gallery() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
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
      <Carousel>
        {" "}
        <div className={styles.gallery}>
          <img src={gallery} alt='' />

          <div>
            <span>OOI Gallery 2015-2024</span>
            <button>See More</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
