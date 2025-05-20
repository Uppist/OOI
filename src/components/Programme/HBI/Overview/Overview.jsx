/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import image1 from "../../../../assets/Programme/HBI/image1.png";

export default function Overview() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={styles.overview}>
      <div className={styles.p}>
        <img src={image1} alt='' />

        <div className={styles.container}>
          <div className={styles.text}>
            {" "}
            <span>
              Overview <hr />
            </span>{" "}
          </div>
          <h2>Haven Bloom Initiative (HBI)</h2>
          <div className={styles.div}>
            <p>
              HBI is an October Orange Initiative dedicated to fostering mental
              health and well-being in Nigeria. Recognising the critical and
              growing need for accessible, affordable mental health services,
              HBI aims to support existing programmes and spearhead new
              initiatives that address the diverse mental health needs of
              individuals and communities. By providing strategic financial
              support, expert technical assistance, and powerful advocacy, HBI
              strives to cultivate a society where mental health is not just
              acknowledged but prioritised, and where everyone, regardless of
              their background, has access to the comprehensive care they need.
              HBI is unwavering in its commitment to promoting mental health and
              well-being across Nigeria. We acknowledge the urgent necessity for
              accessible and affordable mental health services and are
              proactively addressing this need through a multifaceted strategy.
              Our core focus areas include significantly expanding access to
              vital care, launching impactful campaigns to promote mental health
              awareness, investing in groundbreaking research and innovation,
              and empowering communities to become active participants in
              fostering mental well-being. Through a combination of supporting
              established programmes and initiating novel approaches, we aim to
              construct a robust and comprehensive mental health support system
              that leaves no one behind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
