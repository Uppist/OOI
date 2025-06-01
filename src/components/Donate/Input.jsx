/** @format */

import React, { useState } from "react";
import styles from "./donate.module.css";
import { Link } from "react-router-dom";

export default function Input({
  isData,
  Details,
  color,
  currentConfig,
  isError,
}) {
  return (
    <>
      <div className={styles.inputField}>
        <div className={styles.error}>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={isData.firstName}
            onChange={Details}
          />
          {isError.firstName && (
            <p className={styles.error2}>{isError.firstName}</p>
          )}
        </div>
        <div className={styles.error}>
          <input
            type='text'
            name='middleName'
            value={isData.middleName}
            onChange={(e) => Details(e)}
            placeholder='Middle Name'
          />
          {isError.middleName && (
            <p className={styles.error2}>{isError.middleName}</p>
          )}
        </div>

        <div className={styles.error}>
          <input
            type='text'
            name='Surname'
            value={isData.Surname}
            onChange={(e) => Details(e)}
            placeholder='Surname'
          />
          {isError.Surname && (
            <p className={styles.error2}>{isError.Surname}</p>
          )}
        </div>
      </div>
      <div className={styles.inputField}>
        <div className={styles.error}>
          <input
            type='email'
            name='email'
            value={isData.email}
            onChange={(e) => Details(e)}
            placeholder='Email Address'
          />
          {isError.email && <p className={styles.error2}>{isError.email}</p>}
        </div>

        <div className={styles.error}>
          <input
            type='number'
            name='phone_number'
            value={isData.phone_number}
            onChange={(e) => Details(e)}
            placeholder='Phone Number'
          />
          {isError.phone_number && (
            <p className={styles.error2}>{isError.phone_number}</p>
          )}
        </div>
      </div>
      <div className={styles.button}>
        <Link to='/givengo'>
          <div
            className={styles.back}
            style={{ border: `1px solid ${color}`, color: color }}
          >
            <img src={currentConfig.arrow} alt='' style={{ fill: color }} />
            Back
          </div>{" "}
        </Link>

        <button className={styles.checkout} style={{ backgroundColor: color }}>
          Go to Checkout
        </button>
      </div>
    </>
  );
}
