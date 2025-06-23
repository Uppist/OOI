/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import image from "../../assets/Engage/volunteer.png";

export default function Volunteer() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={styles.volunteer}>
      <div className={styles.container}>
        <h2>Volunteer</h2>
        <span>
          Want to be a part of something meaningful? At OOI, we believe that
          volunteers are the heart of our organisation. We offer a range of
          exciting volunteer opportunities where you can put your talents to
          good use and help us achieve our mission of positive change. Discover
          the roles that match your interests and join our vibrant community of
          volunteers. Click below to apply and begin your journey with OOI!
        </span>
        <button>
          <Link to='https://forms.gle/pwdK8oEq4QMdrhd59 '>Join Our Team!</Link>
        </button>
      </div>
      <img src={image} alt='' />
    </div>
  );
}
