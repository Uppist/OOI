/** @format */

import React, { useEffect } from "react";
import OurPartners from "./OurPartners";
import styles from "./style.module.css";

export default function Partners() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={styles.partner}>
      <div className={styles.content}>
        <h2>Partners</h2>
        <div className={styles.text}>
          <p>
            OOI recognises that it cannot achieve its ambitious goals alone.
            Therefore, it will pursue partnerships with relevant stakeholders
            that share its vision. By combining resources and expertise, these
            collaborations lead to more impactful programmes and extend reach.
          </p>
          <p>
            OOI will also seek partnerships with government agencies, tapping
            into their policy knowledge and regulatory support to create
            sustainable solutions. Additionally, the initiative will engage with
            community groups to ensure that its programmes are culturally
            relevant and responsive to the needs of the people they serve.
            Furthermore, OOI will establish partnerships with programme-specific
            partners, such as hospitals for the Health Impact Programme and
            schools for the October Future Fund, to enhance the effectiveness
            and reach of its initiatives.
          </p>
          <p>
            {" "}
              These partnerships will not only maximise OOI's impact but also
            leverage the strengths and resources of each partner, creating a
            powerful network for social change.
          </p>
        </div>
      </div>
      <OurPartners />
    </div>
  );
}
