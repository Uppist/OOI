/** @format */

import React from "react";
import styles from "./newsroom.module.css";

export default function Newsroom() {
  return (
    <div className={styles.newsroom}>
      <h2>Newsroom</h2>
      <div className={styles.p}>
        <p>Stay Up-to-Date with OOI in the News.</p>
        <p>
          Want to know what people are saying about October Orange Initiative?
          Our Newsroom is your one-stop shop for the latest news and media
          coverage featuring OOI. Here, you will find a curated selection of
          articles, blog posts, and press releases from various online outlets
          highlighting our initiatives, impact, and partnerships. In addition to
          OOI, we will also be curating a selection of news sources highlighting
          works around the nonprofit/development sector.
        </p>
        <p>
          Stay informed about our work, discover how we are making a difference
          in the community, and learn about exciting new developments at OOI.
        </p>
      </div>{" "}
      <div>
        <img src='' alt='' />
      </div>
    </div>
  );
}
