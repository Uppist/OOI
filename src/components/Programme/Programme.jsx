/** @format */

import React, { useEffect } from "react";
import FirstSection from "./FirstSection";
import GridContainer from "./GridContainer";
import Buttons from "./Buttons";
import styles from "./style.module.css";

export default function Programme() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <FirstSection />
      <GridContainer />
      <Buttons />
    </div>
  );
}
