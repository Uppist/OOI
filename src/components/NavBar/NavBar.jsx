/** @format */

import React, { use, useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "../../assets/logo.svg";
import GivengoLogo from "../../assets/Givengo/givengo.svg";
import LogoHip from "../../assets/Logo/hip.png";
import LogoOff from "../../assets/Logo/off.png";
import LogoFfi from "../../assets/Logo/ffi.png";
import LogoTgp from "../../assets/Logo/tgp.png";
import LogoHbi from "../../assets/Logo/hbi.png";
import LogoTgt from "../../assets/Logo/tgt.png";
import { Link, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const location = useLocation();

  const LogoMap = {
    "/givengo": GivengoLogo,
    "/health-impact-programme": LogoHip,
    "/october-future-fund": LogoOff,
    "/future-forward-initiative": LogoFfi,
    "/the-gero-programme": LogoTgp,
    "/haven-bloom-initiative": LogoHbi,
    "/the-giving-tree": LogoTgt,
    "/donate-to-hip": GivengoLogo,
    "/donate-to-off": GivengoLogo,
    "/donate-to-ffi": GivengoLogo,
    "/donate-to-tgp": GivengoLogo,
    "/donate-to-hbi": GivengoLogo,
    "/donate-to-tgt": GivengoLogo,
  };

  const logo = LogoMap[location.pathname] || Logo;

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const [isMedia, setisMedia] = useState(false);

  const [isEngage, setIsEngage] = useState(false);

  function sideBar() {
    setIsSidebarVisible(true);
  }

  function onClose() {
    setIsSidebarVisible(false);
  }

  function Media() {
    setisMedia((prev) => !prev);
    setIsEngage(false);
  }

  function Engage() {
    setIsEngage((prev) => !prev);
    setisMedia(false);
  }

  function closeMedia() {
    setisMedia(false);
    setIsEngage(false);
  }

  return (
    <header className={styles.firstsection}>
      <nav className={styles.nav}>
        <Link to='/'>
          {/* <LogoNav /> */}
          <img src={logo} alt='Logo' />
        </Link>

        <ul className={styles.navul}>
          <Link to='/' OOI>
            <li className={styles.lists}>About Us</li>
          </Link>
          <Link to='/programmes'>
            <li className={styles.lists}>Programmes</li>
          </Link>

          <Link to='/givengo'>
            <li className={styles.lists}>Givengo </li>
          </Link>

          {/* <Link to='/Articles'> */}
          <li className={styles.lists} onClick={Media}>
            Media{" "}
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 9L12 15L18 9'
                stroke='#2B2B2B'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </li>
          {/* </Link> */}
          <div className={styles.media}>
            {isMedia && (
              <ul>
                <li>
                  <Link to='/partners' onClick={closeMedia}>
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to='/newsroom' onClick={closeMedia}>
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link to='/gallery' onClick={closeMedia}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to='/reports' onClick={closeMedia}>
                    Featured Reports
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <li className={styles.lists} onClick={Engage}>
            Engage{" "}
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 9L12 15L18 9'
                stroke='#2B2B2B'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </li>
          <div className={styles.media2}>
            {isEngage && (
              <ul>
                <li>
                  <Link to='/volunteer' onClick={closeMedia}>
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link to='/refer' onClick={closeMedia}>
                    Refer a Non-profit
                  </Link>
                </li>

                <li>
                  <Link to='/contactus' onClick={closeMedia}>
                    Contact Us{" "}
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <li className={styles.listmenu} onClick={sideBar}>
            <a className='dropdown'>
              <svg
                width='27'
                height='26'
                viewBox='0 0 27 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.41882 18.4188L20.5915 18.4188'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 13H20.5915'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 7.58118L14.0889 7.58119'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </li>
        </ul>

        <MobileNav
          onClose={onClose}
          isSidebarVisible={isSidebarVisible}
          logo={logo}
        />
      </nav>
    </header>
  );
}
