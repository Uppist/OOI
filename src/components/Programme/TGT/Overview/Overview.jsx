/** @format */

import React, { useEffect } from "react";
import styles from "./overview.module.css";
import overview from "../../../../assets/Programme/TGT/overview.png";

export default function Overview() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={styles.overview}>
      <div className={styles.p}>
        <img src={overview} alt='' />

        <div className={styles.container}>
          <div className={styles.text}>
            {" "}
            <span>
              Overview <hr />
            </span>{" "}
          </div>
          <h2>The Giving Trybe (TGT)</h2>
          <div className={styles.div}>
            <p>
              The Giving Trybe (TGT) is a donation platform supporting nonprofit
              organisations in Nigeria. We are a centralised platform from which
              donors can select any nonprofit organisation of their choice and
              make a donation to them on the platform. If a donor's desired
              nonprofit organisation is not listed, they have the option of
              suggesting nonprofits that can be eventually profiled on The
              Giving Trybe platform. We also act as an ever-growing repository
              of verified nonprofit organisations which donors from anywhere in
              the world can support by making donations.
            </p>

            <p>
              At TGT, we believe that everyone can make a difference, no matter
              how small. That is why we make it easy for donors to support the
              causes they care about most. With our platform, donors can browse
              through a list of verified nonprofit organisations, learn more
              about their work, and make a donation with just a few clicks.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.p2}>
        <p>
          We are committed to transparency and accountability. All donations
          made on our platform are processed securely and transferred directly
          to the nonprofit organisations they are intended for. We also provide
          donors with regular updates on how their donations are being used.
        </p>
        <p>
          We are excited to be a part of the Nigerian nonprofit ecosystem and to
          help support the incredible work that these organisations are doing.
          We believe that together, we can make a difference in the lives of
          many Nigerians.
        </p>

        <p>We use the art of giving to make our world better.</p>
      </div>
    </div>
  );
}
