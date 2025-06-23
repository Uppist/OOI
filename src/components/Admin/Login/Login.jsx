/** @format */

import React from "react";
import styles from "./style.module.css";
export default function Login() {
  return (
    <div className={styles.login}>
      <div>
        <label htmlFor=''>Log into account</label>
        <form className={styles.form}>
          <div>
            <span>Email Address</span>
            <input type='email' />
          </div>
          <div>
            <span>Password</span>
            <input type='password' name='' id='' />
          </div>

          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
