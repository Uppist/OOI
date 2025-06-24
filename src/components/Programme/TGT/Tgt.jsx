/** @format */

import React from "react";
import Overview from "./Overview/Overview";
import Donate from "./Donate/Donate";
import How from "./How/How";
import Involve from "./Involved/Involve";
import styles from "../TGT/Overview/overview.module.css";

export default function Tgt() {
  return (
    <div className={styles.tgt}>
      <Overview />
      <Donate />
      <How />
      <Involve />
    </div>
  );
}
