/** @format */

import React from "react";
import styles from "./program.module.css";
import programme1 from "../../../../assets/Programme/FFI/programme.svg";
import programme2 from "../../../../assets/Programme/FFI/duration.svg";
import programme3 from "../../../../assets/Programme/FFI/programme2.svg";
import programme4 from "../../../../assets/Programme/FFI/programme3.svg";

export default function Programme() {
  return (
    <div className={styles.program}>
      <div className={styles.container}>
        <h2>Programme Structure</h2>
        <span>
          Now that the challenges facing the Nigerian graduates have been
          explored, this section delves into the programme structure. This
          section outlines the key components and activities that make up the
          FFI programme.
        </span>
        <img className={styles.desktopImage} src={programme1} alt='' />
        <img className={styles.mobileImage} src={programme3} alt='' />

        <div>
          <span>Programme Duration</span>{" "}
          <p>
            The projected timeline for each cohort is seven months, covering the
            pre-programme, programme execution, and post-programme phases. This
            duration allows for a comprehensive and impactful experience for
            participants, ensuring that they receive adequate training,
            mentorship, and support.
          </p>
        </div>
        <img className={styles.desktopImage} src={programme2} alt='' />
        <img className={styles.mobileImage} src={programme4} alt='' />
      </div>
      <div className={styles.container2}>
        <div>
          <span>Pre-programme Activities</span>
          <p>
            The initiation of pre-programme activities will be dependent on the
            degree to which milestones have been achieved as highlighted in the
            Preparatory Phase. The success of the FFI programme hinges on
            achieving a 90% completion rate in the preparatory phase. This will
            create a solid foundation for the pre-programme phase and ensure a
            seamless transition into the programme itself. Key activities to be
            undertaken at this stage will include: media, network engagements,
            sourcing and onboarding.
          </p>
        </div>
        <div>
          {" "}
          <span>Programme Administration</span>
          <p>
            To ensure a seamless and efficient start to the programme, all
            administrative matters, including vendor agreements and facilitator
            onboarding, are finalised well in advance. A detailed programme
            schedule, outlining the specific activities, timelines, and
            responsibilities of each participant, is shared with all
            facilitators and mentors. This allows for clear communication,
            coordination, and effective planning. Additionally, it is essential
            to establish clear guidelines and expectations for all involved
            parties, including participants, facilitators, mentors, and vendors.
            This will help to prevent misunderstandings, ensure accountability,
            and maintain a positive and productive working environment.
          </p>
        </div>
        <div>
          {" "}
          <span>Course Allocation</span>
          <p>
            A comprehensive course schedule outlining the FFI programme will be
            shared with stakeholders. This document will specify the hours
            dedicated to each course, the assessment methods used, and how
            in-person and virtual sessions will be distributed. The schedule is
            designed with flexibility in mind to adapt to changes and optimise
            programme effectiveness.
          </p>
        </div>
        <div>
          {" "}
          <span>Post-programme (Close/Feedback)</span>
          <p>
            The post-programme phase marks the end of the FFI journey with each
            cohort. Each programme will be concluded with a memorable graduation
            ceremony, honouring participants' accomplishments and celebrating
            their success. Key activities will include: results publication,
            graduation & ceremony, programme feedback and cv optimisation
            support.
          </p>
        </div>
      </div>
    </div>
  );
}
