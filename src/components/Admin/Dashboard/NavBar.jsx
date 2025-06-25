/** @format */

import React from "react";
import styles from "./style.module.css";
import left from "../../../assets/Dashboard/left.svg";
import { Link } from "react-router-dom";

export default function NavBar({ title, resetDashboard }) {
  return (
    <nav className={styles.nav}>
      <Link to='/dashboard'>
        {title !== "Dashboard" && <img src={left} onClick={resetDashboard} />}
      </Link>
      <span>{title}</span>
    </nav>
  );
}
