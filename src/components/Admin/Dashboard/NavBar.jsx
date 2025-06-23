/** @format */

import React from "react";
import styles from "./style.module.css";

export default function NavBar({ title }) {
  return <nav className={styles.nav}>{title}</nav>;
}
