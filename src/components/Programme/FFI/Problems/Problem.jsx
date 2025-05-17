/** @format */

import React from "react";
import styles from "./problem.module.css";
import problem from "../../../../assets/Programme/FFI/problem.png";

export default function Problem() {
  return (
    <div className={styles.problem}>
      <div className={styles.container}>
        <h2>Identifying the problems</h2>
        <span>
          Nigeria's graduate unemployment crisis is a complex issue rooted in a
          web of interconnected problems. From economic constraints to
          educational shortcomings and structural deficiencies, the factors
          contributing to this challenge are multifaceted. Let us delve into
          some of the key obstacles hindering the employment prospects of
          Nigerian graduates.
        </span>
        <div>
          <img src={problem} alt='' />
          <span>Major problems plaguing graduate unemployment in Nigeria.</span>
        </div>
      </div>
      <div className={styles.ordered}>
        <ol>
          <li>
            <span>
              Nigeria's burgeoning population is exacerbating the graduate
              unemployment crisis.
            </span>{" "}
            With a rapidly expanding pool of graduates entering the job market,
            competition for limited employment opportunities is intensifying,
            making it increasingly difficult for young people to secure stable
            employment.
          </li>
          <li>
            <span>
              Nigeria's economy is struggling to keep pace with the rapid influx
              of graduates.
            </span>{" "}
            The formal sector, which offers more stable jobs and better wages,
            has been unable to create enough opportunities to accommodate the
            growing number of graduates. As a result, many young people are
            forced to turn to the informal sector, where employment is often
            precarious and earnings are inadequate
          </li>
          <li>
            <span>
              A skills gap is hindering the employability of many Nigerian
              graduates.{" "}
            </span>
            While many graduates have strong theoretical knowledge, they often
            lack the practical skills and real-world experience that employers
            are looking for. This mismatch between academic qualifications and
            job market demands is a significant obstacle to securing employment.
          </li>
          <li>
            <span>
              The quality of education in Nigeria is a major factor contributing
              to graduate unemployment.
            </span>{" "}
            Outdated curricula, insufficient infrastructure, inadequate funding,
            and low teacher quality are hindering the education system's ability
            to produce graduates equipped with the necessary skills and
            knowledge to succeed in the job market.
          </li>
          <li>
            <span>
              Corruption and nepotism are undermining the fairness of the job
              market in Nigeria.
            </span>{" "}
            In many cases, job opportunities are not allocated based on merit
            but rather on personal connections and favouritism. This practice is
            exacerbating the unemployment problem, as qualified graduates are
            often overlooked in favour of less qualified candidates who have the
            right connections.
          </li>
          <li>
            <span>
              The underdeveloped entrepreneurial ecosystem in Nigeria is
              limiting the employment options for graduates.
            </span>{" "}
            While entrepreneurship can be a viable path for many, the challenges
            of starting and growing a business in Nigeria are significant.
            Factors such as limited access to finance, bureaucratic hurdles, and
            lack of government support hinder the development of a thriving
            entrepreneurial ecosystem, making it difficult for graduates to
            pursue their own ventures.
          </li>
          <li>
            <span>
              Nigeria's infrastructure deficit is creating a hostile environment
              for businesses and limiting job opportunities.
            </span>{" "}
            The unreliable power supply, inadequate transportation, and limited
            internet connectivity are hindering business growth and discouraging
            potential employers from expanding their operations. As a result,
            the job market is constrained, making it more difficult for
            graduates to find employment.
          </li>
          <li>
            <span>
              {" "}
              Gender discrimination is a persistent obstacle for female
              graduates in Nigeria.
            </span>{" "}
            Women often face unique challenges in the workplace, including
            gender-based stereotypes, unequal pay, and limited career
            advancement opportunities. These barriers can significantly limit
            their employment prospects, contributing to the overall graduate
            unemployment rate.
          </li>
          <li>
            <span>
              A dearth of career guidance and counselling services is
              contributing to graduate unemployment in Nigeria.
            </span>{" "}
            Many graduates need more support in understanding their career
            options, developing effective job search strategies, and building
            their professional networks. This lack of guidance can significantly
            hinder their ability to secure employment.
          </li>
        </ol>

        <span>
          The challenges facing Nigerian graduates are complex and multifaceted,
          requiring a multifaceted approach to address them. The Future Forward
          Initiative (FFI) is committed to playing a pivotal role in tackling
          these issues. By providing comprehensive skills development, career
          guidance, mentorship, job placement assistance, and entrepreneurship
          support, FFI aims to equip graduates with the tools and resources they
          need to succeed in today's competitive job market. Through its
          programmes and initiatives, FFI seeks to address the underlying causes
          of graduate unemployment and create a more equitable and inclusive job
          market for young people in Nigeria.
        </span>
      </div>
    </div>
  );
}
