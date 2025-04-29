/** @format */

import React from "react";
import styles from "./style.module.css";
import check from "../../../assets/check_circle.svg";

export default function Investment() {
  return (
    <div className={styles.investment}>
      <h2>Investment Management</h2>
      <p>
        OOI is committed to responsible and effective fund management to ensure
        its long-term sustainability and maximise its impact across the primary
        beneficiaries and communities of its various programmes. Our partnership
        with an experienced Trustee/Investment Advisor will be guided by these
        key principles:
      </p>
      <ul>
        <li>
          <img src={check} alt='' />{" "}
          <span>Professional Investment Management:</span> All funds will be
          invested according to the expert advice of our fund manager, ensuring
          informed decision-making and optimal returns.
        </li>
        <li>
          {" "}
          <img src={check} alt='' /> <span>Capital Preservation:</span> A
          significant percentage of donations will be allocated to secure asset
          classes, protecting the various funds’ capital and ensuring its
          long-term sustainability.
        </li>
        <li>
          {" "}
          <img src={check} alt='' /> <span>Diversification</span>: As the total
          funds under management grows, we will diversify the portfolio to
          include equities in established blue-chip companies, balancing risk
          and maximising growth potential.
        </li>
        <li>
          {" "}
          <img src={check} alt='' /> <span>Strategic Allocation:</span> Grant
          funds will be strategically allocated between the investment portfolio
          and a call account to meet both long-term growth and immediate
          beneficiary management needs.
        </li>
        <li>
          {" "}
          <img src={check} alt='' /> <span>Reinvestment:</span> All dividends
          earned from investments will be reinvested to further accelerate
          growth of all funds.
        </li>
        <li>
          {" "}
          <img src={check} alt='' />{" "}
          <span>Regular Reporting and Evaluation:</span> The Trustee/Investment
          Advisor will provide regular performance reports to OOI, ensuring
          transparency and enabling effective monitoring and evaluation.
        </li>
      </ul>
      <p>
        These principles ensure that all donations received are utilised
        responsibly and effectively, maximising  their impact on the lives of
        the intended beneficiaries.
      </p>
    </div>
  );
}
