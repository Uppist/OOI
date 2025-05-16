/** @format */

import React from "react";
import styles from "./overview.module.css";
import overview from "../../../../assets/Programme/OFF/overview.png";

export default function Overview() {
  return (
    <div className={styles.overview}>
      <div className={styles.p}>
        <img src={overview} alt='' />

        <div className={styles.container}>
          <div className={styles.text}>
            {" "}
            <span>Overview</span>
            <hr />{" "}
          </div>
          <h2>October Future Fund (OFF)</h2>
          <div className={styles.div}>
            <p>
              The October Future Fund (OFF) is dedicated to improving access to
              quality education in Nigeria. Our initial focus is to reduce the
              number of out-of-school children by providing scholarships that
              cover their educational journey from primary school to university.
              We believe that by investing in these children's futures, we can
              empower them to reach their full potential and contribute to a
              brighter future for the communities we serve.{" "}
            </p>

            <p>
              As it currently stands, "even though primary education is
              officially free and compulsory, about 10.5 million of the
              country's children aged 5-14 years are not in school. Only 61
              percent of 6-11 year-olds regularly attend primary school and
            </p>
          </div>
        </div>
      </div>
      <div className={styles.p2}>
        <p>
          only 35.6 percent of children aged 36-59 months receive early
          childhood education. In the north of the country, the picture is even
          bleaker, with a net attendance rate of 53 percent. Getting
          out-of-school children back into education poses a massive challenge.”
          - Culled from UNICEF. But when you move towards the North, "gender,
          like geography and poverty, is an important factor in the pattern of
          educational marginalisation. States in the north-east and north-west
          have female primary net attendance rates of 47.7 percent and 47,3
          percent, respectively, meaning that more than half of the girls are
          not in school." - Culled from UNICEF. Thus, this will influence OOI’s
          operational factors in delivering on the ideals of the programme,
          especially in educating the primary target audience of this programme.
        </p>
        <p>
          The intention with OFF contributes to the United Nations’ Sustainable
          Development Goals (SDGs) - Goal 4 - which eventually leads to meeting
          the ideals of - Goal 10.
        </p>
      </div>
    </div>
  );
}
