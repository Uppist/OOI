/** @format */

import React, { useEffect } from "react";
import styles from "./newsroom.module.css";
import news1 from "../../../assets/Media/news1.png";
import news2 from "../../../assets/Media/new2.png";
import news3 from "../../../assets/Media/new3.png";
import news4 from "../../../assets/Media/new4.png";
import news5 from "../../../assets/Media/new5.png";
import arrow from "../../../assets/Media/arrow.svg";

export default function Newsroom() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  function handleClick(event) {
    window.open(event);
  }
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
      <div className={styles.news}>
        <div className={styles.news1}>
          <div className={styles.news1div}>
            <img src={news1} alt='' />
            <span>
              The impact has been devastating’: how USAid freeze sent shockwaves
              through Ethiopia
              <img
                src={arrow}
                alt=''
                onClick={() =>
                  handleClick(
                    "https://www.theguardian.com/global-development/ng-interactive/2025/feb/21/the-impact-has-been-devastating-how-usaid-freeze-sent-shockwaves-through-ethiopia"
                  )
                }
              />
            </span>
          </div>
          <div className={styles.news1div2}>
            {" "}
            <img src={news2} alt='' />
            <span>
              Ghana scrambles to fill $156 million shortfall after USAID freeze
              <img
                src={arrow}
                alt=''
                onClick={() =>
                  handleClick(
                    "https://www.wyomingnewsnow.tv/news/national/ghana-scrambles-to-fill-156-million-shortfall-after-usaid-freeze/article_c9062317-51ce-512c-bd0d-d16f6704edef.html"
                  )
                }
              />
            </span>
          </div>
        </div>
        <div className={styles.news2}>
          <div className={styles.news2div}>
            <div className={styles.news2div1}>
              <img src={news3} alt='' />
              <span>
                Top 10 Grantmakers Funding Child Advocacy and Legal Aid Services
                <img
                  src={arrow}
                  alt=''
                  onClick={() =>
                    handleClick(
                      "https://www2.fundsforngos.org/articles-searching-grants-and-donors/top-10-grantmakers-funding-child-advocacy-and-legal-aid-services/"
                    )
                  }
                />
              </span>
            </div>
            <div className={styles.news2div1}>
              <img src={news4} alt='' />
              <span>
                Emergency response in Sudan <img src={arrow} alt='' />
              </span>
            </div>
          </div>
          <div className={styles.news2div2}>
            <img src={news5} alt='' />
            <span>
              Withdrawal of USAID: A ticking time bomb for rural electrification
              in Nigeria
              <img
                src={arrow}
                alt=''
                onClick={() =>
                  handleClick(
                    "https://nairametrics.com/2025/02/22/withdrawal-of-usaid-a-ticking-time-bomb-for-rural-electrification-in-nigeria/"
                  )
                }
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
