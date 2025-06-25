/** @format */

import React, { useEffect, useState } from "react";
import styles from "../Newsroom/newsroom.module.css";
import image1 from "../../../assets/Media/image1.jpg";
import image2 from "../../../assets/Media/image2.jpeg";
import image3 from "../../../assets/Media/image3.jpg";
import image4 from "../../../assets/Media/image4.JPG";
import image5 from "../../../assets/Media/image5.jpeg";
import image6 from "../../../assets/Media/image6.jpeg";
import image7 from "../../../assets/Media/image7.jpeg";
import image8 from "../../../assets/Media/image8.jpeg";
import right from "../../../assets/Media/Right.svg";
import left from "../../../assets/Media/Left.svg";
import { Link } from "react-router-dom";

export default function Gallery() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the active image

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to the next image
  }

  function handlePrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ); // Move to the previous image
  }

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
      <div className={styles.carousel}>
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className={styles.carouselImage}
        />
        <div>
          <img onClick={handlePrev} className={styles.prevButton} src={left} />

          <img onClick={handleNext} className={styles.nextButton} src={right} />
        </div>
      </div>
      <div className={styles.gallery}>
        <span>
          <Link to='https://drive.google.com/drive/folders/1wZFhMbc3ClDG9Iz1iFA7tRuaXYYd9OtU?usp=drive_link'>
            OOI Gallery 2015-2024
          </Link>
        </span>
      </div>
    </div>
  );
}
