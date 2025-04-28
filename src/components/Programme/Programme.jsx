/** @format */

import React from "react";
import FirstSection from "./FirstSection";
import GridContainer from "./GridContainer";
import Buttons from "./Buttons";
import styles from "./style.module.css";

export default function Programme() {
  return (
    <div className={styles.container}>
      <FirstSection />
      <GridContainer />
      <Buttons />
    </div>
  );
}
