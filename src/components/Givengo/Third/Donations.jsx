/** @format */

import React from "react";
import styles from "../First/style.module.css";
import image2 from "../../../assets/Givengo/image2.png";
import check from "../../../assets/check_circle.svg";

export default function Donations() {
  return (
    <div className={styles.overview}>
      <div className={styles.content}>
        <img src={image2} alt='' />

        <div className={styles.textContent}>
          <h2>Donations Management </h2>
          <p>
            OOI is committed to securing sustainable and ethical funding to
            support its mission and the broader goals of all programmes and
            campaigns.. <br />
            <br />
            Instead of solely relying on recurring one-time donations, we have
            built a sustainable model that ensures long-term support for the
            beneficiaries of our programmes. Here is how it works: Investing for
            Growth (donations are invested in a diversified portfolio managed by
            a key partner. This allows your donations (invested as capital) to
            grow and generate returns, which are further reinvested in the
            respective funds); Self-Sustainability (returns from ongoing
            investments allows OOI to reduce reliance on constant fundraising,
            securing a reliable and consistent funding stream); Combating Donor
            Fatigue (This model minimises "donor apathy" by demonstrating a
            responsible and sustainable approach to philanthropy. Donors can be
            confident that their contributions will have a lasting impact). This
            approach to donations management allows OOI to create a lasting
            legacy of impactful support to the communities we serve.
          </p>
        </div>
      </div>
      {/* <div></div> */}
      <div className={styles.p}>
        <span>OOI’s structure offers two key advantages:</span>

        <ul>
          <li>
            <img src={check} alt='' /> Attracting Committed Donors: By focusing
            on long-term sustainability and impact, OOI appeals to donors who
            are passionate about creating lasting change across a range of
            opportunities to help those in need. 
          </li>
          <li>
            <img src={check} alt='' /> Ensuring Transparency and Accountability:
            Funds are managed independently, guaranteeing transparency and
            accountability in how donations are used to support beneficiaries.
            This builds trust and confidence among donors.
          </li>
        </ul>

        <span>
          We will explore a diverse range of funding sources, including:
        </span>

        <ul>
          <li>
            <img src={check} alt='' /> Individual and Corporate Donations: We
            will actively engage individuals, families, and corporations who
            share our passion for the diversity of our programmes.
          </li>
          <li>
            <img src={check} alt='' /> Grants and Partnerships: We will pursue
            grants from charitable organisations and donor agencies, as well as
            collaborate with like-minded partners in various industries.
          </li>
          <li>
            <img src={check} alt='' /> Strategic Alliances: We will build
            relationships with local and international organisations committed
            to the causes of all our programmes, expanding our network and
            amplifying our impact.
          </li>
        </ul>
      </div>
    </div>
  );
}
