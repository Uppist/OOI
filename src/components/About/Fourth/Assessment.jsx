/** @format */
import React from "react";
import styles from "./style.module.css";
import image9 from "../../../assets/Aboutus/image9.png";
import check from "../../../assets/check_circle.svg";

export default function Assessment() {
  return (
    <div className={styles.assessment}>
      <h2>Impact Assessment and Reporting</h2>

      <div className={styles.content}>
        <div className={styles.image}>
          <div className={styles.text}>
            <p>
              OOI is committed to measuring and reporting the impact of its
              programmes, ensuring transparency and accountability in all its
              activities. To achieve this, we have established a robust and
              comprehensive assessment and reporting structure:
            </p>

            <ul>
              <li>
                {/* {" "} */}
                <img src={check} alt='' />{" "}
                <span>Impact Measurement Framework:</span> OOI works with an
                assessment framework that addresses the nuances of each of its
                programmes, as well as outlining key performance indicators,
                targets and data collection methods. This framework guides the
                ongoing monitoring and evaluation of programme effectiveness.
              </li>
              <li>
                {" "}
                <img src={check} alt='' />
                <span> Regular Impact Assessments:</span> OOI conducts regular
                impact assessments using a mix of qualitative and quantitative
                data collection methods (including surveys, interviews, focus
                groups, data analysis, etc). These assessments measure progress
                towards programme goals, identify areas for improvement and
                inform strategic decision making.
              </li>
            </ul>
          </div>
          <img src={image9} alt='' />
        </div>
        <ul>
          <li>
            <img src={check} alt='' />
            <span> Annual Reports:</span> OOI publishes detailed annual reports
            that provide a transparent and comprehensive overview of its
            activities, achievements, financial performance and impact. In
            addition, we would be publishing where we have failed and the
            lessons learnt from those experiences as a way to improve how we do
            things. These reports will be publicly available on our website for
            all our stakeholders.
          </li>
          <li>
            <img src={check} alt='' />
            <span> Donor Engagement:</span> OOI actively engages donors in the
            assessment and reporting processes by providing regular updates on
            the progress of its programmes by sharing stories of impact and
            inviting feedback. This approach fosters a sense of ownership and we
            hope it always encourages continued support for OOI’s initiatives.
          </li>
          <li>
            <img src={check} alt='' />
            <span> External Evaluation:</span> To maintain the highest standards
            of accountability, OOI will periodically commission external
            evaluations of its programmes by independent experts. These
            evaluations will provide an objective assessment of programme
            effectiveness and identify areas for improvement.
          </li>
        </ul>
        <p>
          The continued implementation of this comprehensive assessment and
          reporting structure aims to demonstrate OOI’s commitment to
          transparency, accountability and learning, while also fostering trust
          and encouraging donor participation in its activities.
        </p>
      </div>
    </div>
  );
}
