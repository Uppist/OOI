/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import giveno from "../../../assets/Givengo/givengo.svg";
import menu from "../../../assets/Dashboard/menu.svg";
import { useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function Navbar({ resetDashboard }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  function sideBar() {
    setIsSidebarVisible(true);
  }
  function onClose() {
    setIsSidebarVisible(false);
  }

  const location = useLocation();
  return (
    <div className={styles.logo}>
      {" "}
      <img src={giveno} alt='' />
      {location.pathname === "/dashboard" && (
        <img src={menu} onClick={sideBar} />
      )}{" "}
      <MobileNav
        isSidebarVisible={isSidebarVisible}
        onClose={onClose}
        resetDashboard={resetDashboard}
      />
    </div>
  );
}
