/** @format */

import React, { useEffect } from "react";
import styles from "./donate.module.css";
import logo from "../../assets/Donate/logo1.svg";
import logo2 from "../../assets/Donate/logo2.svg";
import logo3 from "../../assets/Donate/logo3.svg";
import logo4 from "../../assets/Donate/logo4.svg";
import logo5 from "../../assets/Donate/logo5.svg";
import logo6 from "../../assets/Donate/logo6.svg";

import down from "../../assets/Donate/down.svg";
import arrow from "../../assets/Donate/arrow.svg";

import { useLocation } from "react-router-dom";

export default function DonateHip() {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const pageConfig = {
    "/donate-to-hip": {
      title: "Health Impact Programme (HIP)",
      logo: logo,
      color: "hsla(219, 79%, 66%, 1)",
    },
    "/donate-to-off": {
      title: "October Future Fund (OFF)",
      logo: logo2,
      color: "hsla(12, 100%, 60%, 1)",
    },
    "/donate-to-ffi": {
      title: "Future Forward Initiative (FFI)",
      logo: logo3,
      color: "hsla(218, 48%, 30%, 1)",
    },
    "/donate-to-tgp": {
      title: "The Gero Programme (TGP)",
      logo: logo4,
      color: "hsla(90, 37%, 50%, 1)",
    },
    "/donate-to-hbi": {
      title: "Haven Bloom Initiative (HBI)",
      logo: logo5,
      color: "hsla(263, 100%, 66%, 1)",
    },
    "/donate-to-tgt": {
      title: "The Giving Trybe (TGT)",
      logo: logo6,
      color: "hsla(345, 81%, 75%, 1)",
    },
  };

  const currentConfig = pageConfig[location.pathname];
  const color = currentConfig.color;

  return (
    <div className={styles.donate}>
      <div className={styles.logoName}>
        <h2 style={{ color }}>Donate</h2>
        <span style={{ color }}>{currentConfig.title}</span>
      </div>
      <div className={styles.amount}>
        <span>Choose a donation amount</span>
        <div>
          <button style={{ border: `1px solid ${color}`, color: color }}>
            ₦5,000
          </button>
          <button style={{ border: `1px solid ${color}`, color: color }}>
            ₦10,000
          </button>
          <button style={{ border: `1px solid ${color}`, color: color }}>
            ₦15,000
          </button>
          <button style={{ border: `1px solid ${color}`, color: color }}>
            ₦20,000
          </button>
          <button style={{ border: `1px solid ${color}`, color: color }}>
            ₦25,000
          </button>
        </div>
      </div>
      <div className={styles.or}>
        <hr />
        <span>OR</span>
        <hr />
      </div>
      <div className={styles.image}>
        <div className={styles.donation}>
          <div className={styles.amount}>
            <span>Enter a custom donation amount</span>
            <div className={styles.enterAmount}>
              <div className={styles.naira} style={{ backgroundColor: color }}>
                ₦
              </div>
              <input type='text' name='' id='' placeholder='Enter Amount' />
            </div>
          </div>
          <div className={styles.amount}>
            <span>Choose a donation frequency</span>
            <div>
              <button style={{ border: `1px solid ${color}`, color: color }}>
                One-Time
              </button>
              <button style={{ border: `1px solid ${color}`, color: color }}>
                Monthly
              </button>
            </div>
          </div>
        </div>
        <img src={currentConfig.logo} alt='' />
      </div>
      <div className={styles.information}>
        <label htmlFor=''>Personal Information</label>
        <div className={styles.input}>
          <div className={styles.title}>
            <span>Select Title</span>
            <img src={down} alt='' />
          </div>
          <div>
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Middle Name' />
            <input type='text' placeholder='Surname' />
          </div>
          <div>
            <input type='email' placeholder='Email Address' />
            <input type='text' placeholder='Phone Number' />
          </div>
          <div className={styles.button}>
            <div
              className={styles.back}
              style={{ border: `1px solid ${color}`, color: color }}
            >
              <img src={arrow} alt='' style={{ fill: color }} />
              Back
            </div>
            <div className={styles.checkout} style={{ backgroundColor: color }}>
              Go to Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
